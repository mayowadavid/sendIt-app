import React from 'react'
import AdminBlogCard from './admin-blog-card';

const AdminBlog = ({handleSwitch}) => {
  const blogRow = [1, 2, 3, 4, 5];
  return (
    <div className="admin_blog_body">
                    <div className="admin_blog_header_row flex_row">
                        <div className="admin_blog_header remove_margin">
                            <p>Blog List</p>
                        </div>
                        <div className="admin_blog_header_button sm5 l3 remove_margin">
                            <button onClick={handleSwitch}>Create new Blog</button>
                        </div>
                    </div>
                    <div className="admin_body_wrapper l-jsty-btw flex_row">
                        {blogRow.map((i, k)=><AdminBlogCard key={k} />)}
                    </div>
                </div>
  )
}

export default AdminBlog