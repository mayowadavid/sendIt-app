import React, { useEffect, useState } from "react";
import AdminBlogCard from "./admin-blog-card";
import { FETCH_ALL_BLOG_POST, FETCH_ALL_BLOG_PAGE } from "../queries/blog/blog";
import { useDataQuery } from "../functions/customHook";
import { makeQuery, paginate, retrievePaginateLength } from "../functions/function";

const AdminBlog = ({ handleSwitch, displaySwitch, setSwitch }) => {
  const [blogRow, setBlogRow] = useState([]);
  const [blogRowCopy, setBlogRowCopy] = useState([]);
  const [pageRow, setPageRow] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [activeNumber, setActiveNumber] = useState(0);
  const [pageRowCopy, setPageRowCopy] = useState([]);
  const { runQuery: blogPostQuery, allBlogPost } = useDataQuery(FETCH_ALL_BLOG_POST);
  const { runQuery: blogPageQuery, allBlogPage } = useDataQuery(FETCH_ALL_BLOG_PAGE);
  const [switchState, setSwitchState] = useState(true);
  const status = ["draft", "active", "paused"];

useEffect(()=>{
    fetchData();
}, [])

//swich from blog to page
const tabSwitch = () => {
    setSwitchState(!switchState);
    setPageNumber(1);
    setActiveNumber(0);
}

const fetchData = async () => {
  const data = {
    limit: 20,
    page: 1,
  };
  const res = await Promise.all([makeQuery(blogPostQuery, data, 'data'), makeQuery(blogPageQuery, data, 'data')]);
  const blogData = res[0]?.allBlogPost?.posts;
  const pageData = res[1]?.allBlogPage?.pages;
        blogData?.length > 0 && setBlogRow(blogData);
        blogData?.length > 0 && setBlogRowCopy(blogData);
        pageData?.length > 0 && setPageRow(pageData);
        pageData?.length > 0 && setPageRowCopy(pageData);
}

const handleChange = (e) => {
  e.preventDefault();
  const {name, value} = e.target;
  //filter blog data
  const blogFilter = switchState && 
  (blogRowCopy.length > 0 && blogRowCopy.filter((d)=> d.status == value));
  switchState && setBlogRow(blogFilter);

  //filter page data
  const pageFilter = !switchState && 
  (pageRowCopy.length > 0 && pageRowCopy.filter((d)=> d.status == value));
  !switchState && setPageRow(pageFilter);
}

//set page number
const handlePagination = (e, number) => {
  e.preventDefault();
  setPageNumber(number);
  setActiveNumber(number);
}

//delete blog or page data
const removeData = (type, id) => {
 const postReset = (type == 'post') && (blogRow.filter((d)=> d.id !== id));
 (type == 'post') && (setBlogRow(postReset), setBlogRowCopy(postReset));
 const pageReset = (type == 'page') && (pageRow.filter((d)=> d.id !== id));
 (type == 'page') && (setPageRow(pageReset), setPageRowCopy(pageReset));
}

  return (
    <div className="admin_blog_body">
      <div className="admin_blog_header_row flex_row">
        <div className="admin_blog_header remove_margin">
          <p>Blog List</p>
        </div>
        <div className="admin_blog_header_button sm5 l3 remove_margin">
          <div className="button">
            <button className="white_buuton" onClick={handleSwitch}>
              Create new Blog
            </button>
          </div>
        </div>
      </div>
      <div className="flex_row mbw10">
        <div className="flex_row mbw6">
          <div onClick={tabSwitch} className={`mbw1 tab ${switchState ? 'active' : ''}`}>
              <p>Post</p>
          </div>
          <div onClick={tabSwitch} className={`mbw1 tab ${!switchState ? 'active' : ''}`}>
              <p>Page</p>
          </div>
        </div>
        <div className="flex_row filter remove_margin mbw4">
          <p className="mbw2">Filter</p>
          <select name="status" onChange={handleChange} className="mbw8">
                  <option defaultValue hidden>
                    {"Change Status"}
                  </option>
            {status?.map((stat, i)=>(<option key={i}>{stat}</option>))}
          </select>
        </div>
      </div>
      <div className="flex_row mbw-jsty-ctr pagination">{ retrievePaginateLength(switchState ? blogRow : pageRow, 6)?.length > 1
        && retrievePaginateLength(switchState ? blogRow : pageRow, 6)?.map((d, i)=> 
        <p 
         className={`${activeNumber == (i + 1) ? 'active': ''}`}
        onClick={(e)=> handlePagination(e, (i + 1))}
        key={i}>{i + 1}</p>)}
      </div>
      <div className="admin_body_wrapper l-jsty-btw flex_row">
        {(switchState 
        ? ((blogRow?.length > 0 && blogRow?.length > 6) 
        ? paginate(blogRow, pageNumber, 6) : blogRow ) 
        : (pageRow?.length > 0 && pageRow > 6) 
        ? paginate(pageRow, pageNumber, 6) : pageRow 
        )?.map((blog, k) => (
          <AdminBlogCard
            setSwitch={setSwitch}
            displaySwitch={displaySwitch}
            blog={blog}
            key={k}
            removeData={removeData}
          />
        ))}
      </div>
      <div className="flex_row mbw-jsty-ctr pagination">{ retrievePaginateLength(switchState ? blogRow : pageRow, 6)?.length > 1
        && retrievePaginateLength(switchState ? blogRow : pageRow, 6)?.map((d, i)=> 
        <p 
        className={`${activeNumber == (i + 1) ? 'active': ''}`}
        onClick={(e)=> handlePagination(e, (i + 1))}
        key={i}>{i + 1}</p>)}
        </div>
    </div>
  );
};

export default AdminBlog;
