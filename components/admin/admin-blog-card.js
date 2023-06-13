import React, { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";
import { formatDate, removeSpecialCharacters } from "../functions/function";

const AdminBlogCard = ({ blog, displaySwitch, setSwitch }) => {
  const { router } = useContext(MainContext);
  const [option, setOption] = useState(false);

  const handleOPtion = (e) => {
    e.preventDefault();
    let { display, create } = displaySwitch;
    setSwitch({
      display: !display,
      create: !create,
    });
    
    router.replace({
      pathname: "blog",
      query: { view: "update", slug: blog.slug },
    });
  };

  const plainDescription = removeSpecialCharacters(blog?.descriptionMarkDown);
  const inputDate = new Date(blog?.createdAt);
  const date = formatDate(inputDate);


  //preview function
  const preview = () => {
    const url = `/blog/${blog.slug}`
    window.open(url, '_blank');
  }


  return (
    <div className="admin_blog_card l45 sm10 l-mg-tp10">
      <div className="admin_blog_card_header flex_row">
        <div className="blog_blog_hold flex_row">
          <div className="blog_card_image">
            <img src="/img/category6.png" alt="" />
          </div>
          <div className="blog_card_name remove_margin">
            <p>{blog?.user?.userName || "--"}</p>
          </div>
        </div>
        <div className="blog_card_option" onClick={() => setOption(!option)}>
          <div className="blog_card_option_control flex_row">
            <img src="/svg/more_horizontal.svg" alt="" />
          </div>
          {option && (
            <div className="blog_card_option_drop">
              <div
                onClick={handleOPtion}
                className="blog_card_edit flex_row remove_margin"
              >
                <img src="/img/Edit Square.png" alt="" />
                <p>Update blog</p>
              </div>
              <div className="blog_card_edit flex_row remove_margin">
                <img src="/img/redDelete.png" alt="" />
                <p>Delete blog</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="display_blog_image">
        <img src={blog?.file?.image || "../../svg/no_caption.svg"} alt="" />
      </div>
      <div className="blog_card_title">
        <p>{blog?.name || "--"}</p>
      </div>
      <div className="blog_publish_wrap flex_row">
        <div className="blog_publish  sm5 remove_margin flex_row">
          <div className="round"></div>
          <p>{blog?.status}</p>
        </div>
        <div className="blog_date remove_margin">
          <p>{date}</p>
        </div>
      </div>
      <div className="blog_content_details remove_margin">
        <p>{plainDescription || "--"}</p>
      </div>
      <div className="blog_tags flex_row">
        <p>{blog?.category?.name || "--"}</p>
      </div>
      <div className="admin_blog_comments flex_row">
        {
          blog.type === 'post' &&
        (<div className="admin_blog_icon flex_row remove_margin">
          <img src="/img/Chat.png" alt="" />
          <p>{`${blog?.comments.length || 0} Comments`}</p>
        </div>)}
        <div className="admin_blog_preview remove_margin">
          <p onClick={preview}>Preview</p>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogCard;
