import React from 'react'
import AdminHeader from './header'
import AdminSideBar from './sideBar'

const AdminLayout = (props) => {
  return (
    <div className='admin_category'>
        <AdminHeader />
        <div className='admin_category_body'>
        <AdminSideBar />
        <div className='admin_category_right'>
            {props.children}
        </div>
        </div>
    </div>
  )
}

export default AdminLayout