import React, { useContext, useEffect } from 'react'
import { MainContext } from '../context/mainContext'
import { authentication } from '../functions/function'
import AdminHeader from './header'
import AdminSideBar from './sideBar'

const AdminLayout = (props) => {
  const { router } = useContext(MainContext);
  useEffect(()=>{
    // const role = authentication(router);
    // if(role !== "admin"){
    //   //send login form
    // }
  }, [])
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