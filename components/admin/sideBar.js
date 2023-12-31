import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext';

const AdminSideBar = () => {
const {router} = useContext(MainContext);

const handleRoute = async (e, props) => {
    e.preventDefault();
   await router.push(`/${props}`);
   (props == 'dashboard/blog' || props == 'dashboard/category') && router.reload();
}

  return (
    <div className="admin_category_sidebar xl-off">
                <div className="admin_category_top_container">
                    <div className="admin_category_top">
                        <div onClick={(e)=>{handleRoute(e, 'dashboard')}} className="admin_category_top_row flex_row remove_margin">
                            <img src="/svg/Home-white.svg" alt=""/>
                            <img src="/svg/Home.svg" alt=""/>
                            <p>Dashboard</p>
                        </div>
                        <div onClick={(e)=>{handleRoute(e, 'dashboard')}} className="admin_category_top_row flex_row remove_margin">
                            <img src="/svg/commission-white.svg" alt=""/>
                            <img src="/svg/commission.svg" alt=""/>
                            <p>Admin Commission</p>
                        </div>
                        <div onClick={(e)=>{handleRoute(e, 'dashboard/users')}} className="admin_category_top_row flex_row remove_margin">
                            <img src="/svg/users-white.svg" alt=""/>
                            <img src="/svg/users.svg" alt=""/>
                            <p>Users</p>
                        </div>
                        <div onClick={(e)=>{handleRoute(e, 'dashboard/complain')}} className="admin_category_top_row flex_row remove_margin">
                            <img src="/svg/envelope-white.svg" alt=""/>
                            <img src="/svg/envelope.svg" alt=""/>
                            <p>Complaint</p>
                        </div>
                        <div className="admin_category_top_row flex_row remove_margin">
                            <img src="/svg/ad-white.svg" alt=""/>
                            <img src="/svg/ad.svg" alt=""/>
                            <p>Promotions</p>
                        </div>
                        <div onClick={(e)=>{handleRoute(e, 'dashboard/category')}} className="admin_category_top_row flex_row remove_margin">
                            <img src="/svg/Category-white.svg" alt=""/>
                            <img src="/svg/Category.svg" alt=""/>
                            <p>Categories</p>
                        </div>
                        <div onClick={(e)=>{handleRoute(e, 'dashboard/blog')}} className="admin_category_top_row flex_row remove_margin">
                            <img src="/svg/blog-white.svg" alt=""/>
                            <img src="/svg/blog.svg" alt=""/>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
                <div className="admin_category_bottom">
                        <div className="admin_category_top_row flex_row remove_margin">
                            <img src="/svg/Setting.svg" alt=""/>
                            <img src="/svg/Setting.svg" alt=""/>
                            <p>General settings</p>
                        </div>
                        <div className="admin_category_top_row flex_row remove_margin">
                            <img src="/svg/Logout.svg" alt=""/>
                            <img src="/svg/Logout.svg" alt=""/>
                            <p>Log Out</p>
                        </div>
                </div>
            </div>
  )
}

export default AdminSideBar