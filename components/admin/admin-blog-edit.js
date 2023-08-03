import React, { useContext, useState, useEffect } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { MainContext } from "../context/mainContext";
import {
  Toast,
  clean,
  createMutation,
  generateId,
  makeQuery,
  updateQuery,
  uploadImage,
} from "../functions/function";
import Button from "../general/button";
import { useDataQuery, useCreateMutation } from "../functions/customHook";
import { GET_CATEGORIES } from "../queries/categories/categories";
import { CREATE_BLOG, UPDATE_BLOG } from "../mutation/blog/blog";

const AdminBlogEdit = ({ handleSwitch }) => {
  const [loading, setLoading] = useState(false);
  const [plainMarkDown, setPlainMarkDown] = useState("");
  const [categories, setCategories] = useState([]);
  const {
    findSingleBlog,
    axios,
    router,
  } = useContext(MainContext);
  const initialState = {
    name: "",
    categoryId: "",
    slug: "",
    status: "draft",
    description: "",
    descriptionMarkDown: "",
    file: null,
  };
  const status = ["draft", "active", "paused"];
  const postType = ["page", "post"];
  const [postState, setPostState] = useState(initialState);
  const mdParser = new MarkdownIt(/* Markdown-it options */);
  const [temporaryImage, setTemporaryImage] = useState();
  const { slug } = router.query;
  const {runQuery, allCategories} = useDataQuery(GET_CATEGORIES);
  const {create: createBlog, blogResult} = useCreateMutation(CREATE_BLOG);
  const {create: updateBlog, blogUpdate} = useCreateMutation(UPDATE_BLOG);

  useEffect(() => {
    runQuery();
    allCategories && setCategories(allCategories);
  }, [allCategories]);
  
  useEffect(() => {
    if (slug) {
      fetchSlugData(slug);
    }
  }, [slug]);

  const fetchSlugData = async (slug) => {
    const variable = "slugName";
    const result = await makeQuery(findSingleBlog, slug, variable);
    if (result) {
      const pageData = result?.findBlogBySlug;
      const { descriptionMarkDown } =  pageData;
      console.log('page', pageData);
      setPlainMarkDown(descriptionMarkDown);
      setPostState({ ...pageData, category: pageData?.category?.name || "" });
    }
  };

  const handleAction = (e) => {
    e.preventDefault();
    setLoading(!loading);
    handleSwitch();
  };

  const handleCategory = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const categoryId = categories.filter((d) => d.name == value);
    setPostState({ ...postState, categoryId: categoryId[0].id });
  };

  const handleFile = (e, i) => {
    const { files } = e.target;
    let img;
    if (files) {
      let selected = files[0];
      let types = ["image/jpeg", "image/png"];
      let fileType =
        selected !== undefined
          ? types.includes(selected.type)
          : setError("unsupported image type* accepted image jpg/png");
      let FileSize = "5000000";
      let filteredImageSize =
        fileType == true
          ? selected.size < FileSize
          : setError("file too large *5mb minimum");
      let hold = filteredImageSize == true && URL.createObjectURL(selected);
      hold !== undefined && hold;
      setPostState({ ...postState, file: files });
      setTemporaryImage(hold);
      //clone due to no direct manipulation
      URL.revokeObjectURL(selected);
    }
  };

  //handle markdown
  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, "");
    setPlainMarkDown(newValue);
    //console.log(postState);
    setPostState({
      ...postState,
      description: html,
      descriptionMarkDown: newValue,
    });
  };

  //handleChange
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let slug = value.replace(/\s/g, "-");
    const id = generateId();
    slug = `${slug}-${id}`;
    setPostState({
      ...postState,
      [name]: value,
      ["slug"]: name == "name" ? slug : postState?.slug,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    //extracting data to be sent
    const {
      id,
      name,
      slug,
      status,
      description,
      descriptionMarkDown,
      file,
      type,
      categoryId,
    } = postState;
    // reusable data
    const mainData = {
      name,
      slug,
      status,
      categoryId,
      type,
      description,
      descriptionMarkDown,
    };

    const pageData = {
      name,
      slug,
      status,
      type,
      description,
      descriptionMarkDown,
    }

    // if there is an id, we need to update the post
    if (id) {
      setLoading(true);
      // if there is a file attached to the post or page submit the file
      // then attach the id to the post or page
      const blogImage = file && (await uploadImage(axios, file));
      const fileId = blogImage ? blogImage?.data[0].id : null;
      const updateId = { id };
      const variable = "updateBlog";
      const updateData = [
        {
          id,
          fileId,
          ...mainData,
        },
      ];
      const data = await updateQuery(
        updateId,
        variable,
        updateBlog,
        updateData
      );
      data?.errors !== undefined && setLoading(false);
      data &&
        (setLoading(false),
        handleSwitch(),
        Toast.fire({
          icon: "success",
          title: "Post Updated Successfully",
        }));
    } else {
      // create a post or page
      setLoading(true);
      // if there is a file attached to the post or page submit the file
      // then attach the id to the post or page
      const result = (file && type == 'post') && (await uploadImage(axios, file));
      const fileId = (result && type == 'post') ? result?.data[0].id :  null;
      const createData = {
        ...mainData,
        fileId,
      };
      const variableName = "blogInput";
      const data = (type == 'blog') ? 
      await createMutation(createBlog, variableName, createData)
      : await createMutation(createBlog, variableName, pageData);
      data?.errors !== undefined && setLoading(false);
      data?.data &&
        (setLoading(false),
        handleSwitch(),
        Toast.fire({
          icon: "success",
          title: "Post Created Successfully",
        }));
    }
  };

  return (
    <div className="admin_blog_body">
      <div className="admin_blog_header_row flex_row">
        <div className="admin_blog_header sm10 remove_margin">
          <p>Blog Edit</p>
        </div>
        <div className="admin_blog_header_edit_button sm10 sm-mg-tp5 sm-jsty-left xl5  flex_row remove_margin">
          <div onClick={handleAction} className="button">
            <Button>Save As Draft</Button>
          </div>
          <div onClick={(e) => submit(e)} className="button">
            <Button loading={loading}>Submit</Button>
          </div>
        </div>
      </div>
      <div className="admin_form_wrapper m-mg-tp10 flex_row">
        <div className="blog_writer_details flex_row">
          <div className="blog_writer_avatar">
            <img src="/img//category.png" alt="" />
          </div>
          <div className="blog_writer_name remove_margin">
            <p>Name of writer</p>
            <p>Content Writer</p>
          </div>
        </div>
        <div className="blog_writer_form_input">
          <form action="">
            <div className="admin_blog_title m10">
              <p>Title</p>
              <input
                type="text"
                value={postState.name}
                name="name"
                onChange={handleChange}
                placeholder="Enter the title here"
              />
            </div>
            {postState.type !== "page" && (<div className="admin_blog_category m10">
              <p>Category</p>
              <div className="blog_wrapper flex_show_row">
                <div className="flex_show_row blog_category">
                  <select
                    name="categoryId"
                    onChange={handleCategory}
                    className="select_category flex_show_row"
                  >
                    <option defaultValue hidden>
                      {postState?.category || "Select Category"}
                    </option>
                    {categories?.length > 0 &&
                      categories?.map((d, i) => {
                        return <option key={i}>{d.name}</option>;
                      })}
                  </select>
                  <div className="admin_blog_category_select flex_show_row remove_margin">
                    <img src="../../img/caret_down.png" alt="" />
                  </div>
                </div>
              </div>
            </div>)}
            <div className="admin_blog_title m10">
              <p>Slug</p>
              <input
                type="text"
                name="slug"
                disabled
                value={postState.slug}
                placeholder="Enter the title here"
                id=""
              />
            </div>
            <div className="admin_blog_category m10">
              <p>Status</p>
              <div className="admin_blog_wrapper flex_row">
                <select
                  onChange={handleChange}
                  name="status"
                  className="admin_blog_category_status flex_row remove_margin"
                >
                  <option defaultValue hidden>
                    {postState?.status || "Change Status"}
                  </option>
                  {status?.map((s, i) => {
                    return <option key={i}>{s}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="admin_blog_category m10">
              <p>Type</p>
              <div className="admin_blog_wrapper flex_row">
                <select
                  onChange={handleChange}
                  name="type"
                  className="admin_blog_category_status flex_row remove_margin"
                >
                  <option defaultValue hidden>
                    {postState?.type || "Choose Post type"}
                  </option>
                  {postType?.map((s, i) => {
                    return <option key={i}>{s}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="admin_blog_widget">
              <MdEditor
                style={{ height: "300px" }}
                renderHTML={(text) => mdParser.render(text)}
                value={plainMarkDown}
                onChange={handleEditorChange}
              />
            </div>
            {postState?.type !== "page" && (<div className="admin_featured_image_widget flex_row">
              <div className="feature_image_holder">
                <img
                  src={
                    postState?.file?.image ||
                    temporaryImage ||
                    "../../svg/no_caption.svg"
                  }
                  alt=""
                />
              </div>
              <div className="featured_image_content_holder">
                <div className="featured_inner_content remove_margin">
                  <p>Feature Image</p>
                  <p>Required image resolution 800x400, image size 10mb.</p>
                </div>
                <input
                  className="off"
                  type="file"
                  onChange={handleFile}
                  id="file"
                />
                <div className="featured_image_button remove_margin">
                  <label className="remove_margin" htmlFor="file">
                    <p>Choose File</p>
                  </label>
                </div>
              </div>
            </div>)}
            <div className="admin_blog_footer_edit_button sm10 flex_row remove_margin">
              <div onClick={handleAction} className="button">
                <Button>Save As Draft</Button>
              </div>
              <div onClick={submit} className="button">
                <Button loading={loading}>Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEdit;
