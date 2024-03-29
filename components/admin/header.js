import React from 'react'

const AdminHeader = () => {
  return (
    <div className="admin_header_dashboard flex_row">
           <div className="admin_logo flex_row">
                <img src="/img/v_small 3.png" alt=""/>
                <p>Vartisan</p>
           </div>
           <div className="group_admin_header flex_row">
                    <div className="admin_search">
                        <img src="/img/Search.png" alt=""/>
                        <input type="text" name="search" placeholder="Search"/>
                </div>
                <div className="admin_notification">
                        <img src="/img/Notification.svg" alt="" className="src"/>
                </div>
                <div className="admin_avatar">
                        <img src="/img/avatarpic.png" alt=""/>
                </div>
                <div className="admin_name_row">
                    <div className="admin_name remove_margin">
                        <p>Floyd Miles</p>
                        <p>Admin</p>
                    </div>
                    <div className="drop_arrow">
                        <img src="/img/Arrow - Down 2.png" alt=""/>
                    </div>
                </div>
           </div>
       </div>
  )
}

export default AdminHeader;
