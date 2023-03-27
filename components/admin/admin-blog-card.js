import React, { useState } from 'react'

const AdminBlogCard = () => {
    const [option, setOption] = useState(false);
  return (
    <div className="admin_blog_card l45 sm10 l-mg-tp10">
                            <div className="admin_blog_card_header flex_row">
                                <div className="blog_blog_hold flex_row">
                                    <div className="blog_card_image">
                                        <img src="/img/category6.png" alt=""/>
                                    </div>
                                    <div className="blog_card_name remove_margin">
                                        <p>Name of creator</p>
                                    </div>
                                </div>
                                <div className="blog_card_option">
                                <div className="blog_card_option_control flex_row" onClick={()=> setOption(!option)}>
                                <img src="/svg/more_horizontal.svg" alt=""/>
                                </div>
                                    {
                                    option &&
                                    <div className="blog_card_option_drop">
                                        <div className="blog_card_edit flex_row remove_margin">
                                            <img src="/img/Edit Square.png" alt=""/>
                                            <p>Edit blog</p>
                                        </div>
                                        <div className="blog_card_edit flex_row remove_margin">
                                            <img src="/img/update.png" alt=""/>
                                            <p>Update blog</p>
                                        </div>
                                        <div className="blog_card_edit flex_row remove_margin">
                                            <img src="/img/redDelete.png" alt=""/>
                                            <p>Delete blog</p>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                            <div className="display_blog_image">
                                <img src="/img/category1.png" alt=""/>
                            </div>
                            <div className="blog_card_title">
                                <p>How to build professional profile</p>
                            </div>
                            <div className="blog_publish_wrap flex_row">
                                <div className="blog_publish  sm5 remove_margin flex_row">
                                    <div className="round"></div>
                                    <p>published</p>
                                </div>
                                <div className="blog_date remove_margin">
                                    <p>Jan 10, 2022</p>
                                </div>
                            </div>
                            <div className="blog_content_details remove_margin">
                                <p>Lorem quisque proin. Maecenas purus elementum ut blandit</p>
                            </div>
                            <div className="blog_tags flex_row">
                                <p>Tip & Trick</p>
                                <p>Art</p>
                            </div>
                            <div className="admin_blog_comments flex_row">
                                <div className="admin_blog_icon flex_row remove_margin">
                                    <img src="/img/Chat.png" alt=""/>
                                    <p>35 Comments</p>
                                </div>
                                <div className="admin_blog_preview remove_margin">
                                    <p>Preview</p>
                                </div>
                            </div>
                        </div>
  )
}

export default AdminBlogCard