import React, { useEffect, useState } from "react";
import AdminBlogCard from "./admin-blog-card";
import { FETCH_ALL_BLOG_POST, FETCH_ALL_BLOG_PAGE } from "../queries/blog/blog";
import { useDataQuery } from "../functions/customHook";

const AdminBlog = ({ handleSwitch, displaySwitch, setSwitch }) => {
  const [blogRow, setBlogRow] = useState([]);
  const [pageRow, setPageRow] = useState([]);
  const { runQuery: blogPostQuery, allBlogPost } = useDataQuery(FETCH_ALL_BLOG_POST);
  const { runQuery: blogPageQuery, allBlogPage } = useDataQuery(FETCH_ALL_BLOG_PAGE);
  const [switchState, setSwitchState] = useState(true);

useEffect(()=>{
    Promise.all([blogPostQuery(), blogPageQuery()]);
    if(allBlogPost || allBlogPage){
        setBlogRow(allBlogPost);
        setPageRow(allBlogPage);
    }
}, [allBlogPost, allBlogPage])

const tabSwitch = () => {
    setSwitchState(!switchState);
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
        <div onClick={tabSwitch} className={`mbw1 tab ${switchState ? 'active' : ''}`}>
            <p>Post</p>
        </div>
        <div onClick={tabSwitch} className={`mbw1 tab ${!switchState ? 'active' : ''}`}>
            <p>Page</p>
        </div>
      </div>
      <div className="admin_body_wrapper l-jsty-btw flex_row">
        {(switchState? blogRow : pageRow)?.map((blog, k) => (
          <AdminBlogCard
            setSwitch={setSwitch}
            displaySwitch={displaySwitch}
            blog={blog}
            key={k}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminBlog;
