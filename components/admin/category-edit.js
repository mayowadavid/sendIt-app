import React, { useState } from 'react'

const CategoryEdit = () => {

    const [loading, setLoading]= useState(false);

    const handleAction = (e) => {
        e.preventDefault();
        setLoading(!loading);
    }
    
  return (
    <div>
        <div className="create_category_header_row flex_row">
                <div className="create_category_header">
                    <p>Categories</p>
                </div>
                <div className="create_category_header_button xl4 sm6 flex_row">
                    <button onClick={(e)=>handleAction(e)}>Cancle</button> 
                    {!loading && <button onClick={(e)=>handleAction(e)}>Save</button>}
                    {loading && <button disabled={loading} className='loading-dot' onClick={()=>handleAction()}><div className="dot-flashing"></div></button>}
                </div>
            </div>
            <div className="create_category_body">
                <div className="listed_category sm-off xl3">
                    <div className="list_category_header">
                        <p>List of categories</p>
                    </div>
                    <div className="list_category_body">
                        <p>Graphics Design</p>
                        <p>illustration</p>
                        <p>Vtubing</p>
                        <p>Print Design</p>
                        <p>3D Design</p>
                        <p>Art & illustration</p>
                        <p>Packaging & Covers</p>
                        <p>Social Media</p>
                    </div>
                    <div className="list_new_category remove_margin">
                        <p>New Category</p>
                    </div>
                    <div className="margin_seperate"></div>
                    <div className="list_category_create remove_margin flex_row">
                        <img className="xl-off" src="/img/plus_circle.png" alt=""/><p>Create New</p>
                    </div>
                </div>
                <div className="create_category_container_row sm10 xl7">
                    <div className="create_category_top_header">
                        <p>Edit: Graphics Design Category</p>
                    </div>
                    <div className="admin_category_active_container flex_row">
                        <div className="active_category">
                            <div className="active_category_switch"></div>
                        </div>
                        <p>Active Category</p>
                    </div>
                    <div className="create_category_form">
                        <form>
                            <div className="category_name">
                                <p>Category Name</p>
                                <input type="text" name="categoryName" placeholder="Name for new category"/>
                            </div>
                            <div className="category_description">
                                <p>Description</p>
                                <textarea type="text" name="categoryDescription" placeholder="Category description"></textarea>
                            </div>
                            <div className="subCategory">
                                <p>Sub Category</p>
                                <div className="subCategory_wrapper flex_row">
                                    <div className="subcategory_container l4 sm7 flex_row remove_margin">
                                        <p>Logo Design</p>
                                        <img src="/svg/pen-edit.svg" alt=""/>
                                    </div>
                                    <div className="subcategory_container l4 sm7 flex_row remove_margin">
                                        <p>Logo Design</p>
                                        <img src="/svg/pen-edit.svg" alt=""/>
                                    </div>
                                    <div className="subcategory_container l4 sm7 flex_row remove_margin">
                                        <p>Logo Design</p>
                                        <img src="/svg/pen-edit.svg" alt=""/>
                                    </div>
                                    <div className="subcategory_container l4 sm7 flex_row remove_margin">
                                        <p>Logo Design</p>
                                        <img src="/svg/pen-edit.svg" alt=""/>
                                    </div>
                                    <div className="subcategory_container l4 sm7 flex_row remove_margin">
                                        <p>Logo Design</p>
                                        <img src="/svg/pen-edit.svg" alt=""/>
                                    </div>
                                    <div className="subcategory_container l4 sm7 flex_row remove_margin">
                                        <p>Logo Design</p>
                                        <img src="/svg/pen-edit.svg" alt=""/>
                                    </div>
                                    <div className="subcategory_container l4 sm7 flex_row remove_margin">
                                        <p>Logo Design</p>
                                        <img src="/svg/pen-edit.svg" alt=""/>
                                    </div>
                                </div>
                                <input type="text" name="Sub category" placeholder="Sub category"/>
                            </div>
                            <div className="add_other_option flex_row">
                                <img src="/img/plus_circle.png" alt=""/> <p>Add other</p>
                            </div>
                            <div className="submit_category">
                                <button onClick={(e)=>handleAction(e)}>Cancel</button> 
                                {!loading && <button onClick={(e)=>handleAction(e)}>Save</button>}
                    {loading && <button disabled={loading} className='loading-dot'><div className="dot-flashing"></div></button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CategoryEdit