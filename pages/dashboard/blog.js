import React, { useState } from 'react'
import AdminBlog from '../../components/admin/admin-blog'
import AdminBlogEdit from '../../components/admin/admin-blog-edit';
import AdminLayout from '../../components/admin/adminLayout'

const BlogsLayout = () => {
    const [displaySwitch, setSwitch] = useState({
        display: true,
        create: false
    });

    const handleSwitch = () => {
        let {display, create} = displaySwitch;
        setSwitch({
            display: !display,
            create: !create
        });
    }
  return (
    <AdminLayout>
        {displaySwitch.display && <AdminBlog handleSwitch={handleSwitch} />}
        {displaySwitch.create && <AdminBlogEdit handleSwitch={handleSwitch} />}
    </AdminLayout>
  )
}

export default BlogsLayout