import React, { useState } from 'react'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

const AdminBlogEdit = () => {
    const [loading, setLoading]= useState(false);
    const [contentHtml, setContentHtml] = useState('');
    const [plainMarkDown, setPlainMarkDown] = useState('');
    const initialState = {
        name: '',
        category: [],
        slug: '',
        status: 'draft',
        description: '',
        descriptionMarkDown: '',
        createdAt: '',
        file: []
    }
    const [postState, setPostState] = useState(initialState);
    const mdParser = new MarkdownIt(/* Markdown-it options */);

    const handleAction = (e) => {
        e.preventDefault();
        setLoading(!loading);
    }

    //handle markdown
    const handleEditorChange = ({ html, text }) => {
        setContentHtml(html);
        const newValue = text.replace(/\d/g, "");
        setPlainMarkDown(newValue);
        setPostState({...postState, description: html, descriptionMarkDown: newValue})
    }
  return (
        <div className="admin_blog_body">
                    <div className="admin_blog_header_row flex_row">
                        <div className="admin_blog_header sm10 remove_margin">
                            <p>Blog Edit</p>
                        </div>
                        <div className="admin_blog_header_edit_button sm10 sm-mg-tp5 sm-jsty-left xl5  flex_row remove_margin">
                            <button onClick={(e)=>handleAction(e)}>Save as Draft</button> 
                            {!loading && <button onClick={(e)=>handleAction(e)}>Save Change</button>}
                            {loading && <button disabled={loading} className='loading-dot' onClick={()=>handleAction()}>
                            <div className="dot-flashing"></div></button>}
                        </div>
                    </div>
                    <div className="admin_form_wrapper m-mg-tp10 flex_row">
                        <div className="blog_writer_details flex_row">
                            <div className="blog_writer_avatar">
                                <img src="/img//category.png" alt=""/>
                            </div>
                            <div className="blog_writer_name remove_margin">
                                <p>Name of writer</p>
                                <p>Content Writer</p>
                            </div>
                        </div>
                        <div className="blog_writer_form_input">
                            <form action="">
                                <div className="admin_blog_title m10">
                                    <p>Title</p>
                                    <input type="text" name="" placeholder="Enter the title here" id=""/>
                                </div>
                                <div className="admin_blog_category m10">
                                    <p>Category</p>
                                    <div className="admin_blog_wrapper flex_row">
                                        <div className="admin_blog_category_wrap flex_row remove_margin">
                                            <p>Tips & Tricks</p>
                                            <img src="/img//close_small.png" alt=""/>
                                        </div>
                                        <div className="admin_blog_category_select remove_margin">
                                            <img src="/img//caret_down.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin_blog_title m10">
                                    <p>Slug</p>
                                    <input type="text" name="" placeholder="Enter the title here" id=""/>
                                </div>
                                <div className="admin_blog_category m10">
                                    <p>Status</p>
                                    <div className="admin_blog_wrapper flex_row">
                                        <div className="admin_blog_category_status flex_row remove_margin">
                                            <p>Draft</p>
                                        </div>
                                        <div className="admin_blog_category_select remove_margin">
                                            <img src="/img//caret_down.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin_blog_widget">
                                <MdEditor style={{ height: '300px' }} renderHTML={text => mdParser.render(text)} value={plainMarkDown} onChange={handleEditorChange} />
                                </div>
                                <div className="admin_featured_image_widget flex_row">
                                    <div className="feature_image_holder">
                                        <img src="/img//category.png" alt=""/>
                                    </div>
                                    <div className="featured_image_content_holder">
                                        <div className="featured_inner_content remove_margin">
                                            <p>Feature Image</p>
                                            <p>Required image resolution 800x400, image size 10mb.</p>
                                        </div>
                                        <div className="featured_image_button remove_margin">
                                            <p>Choose File</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin_blog_footer_edit_button sm10 flex_row remove_margin">
                                    <button onClick={(e)=>handleAction(e)}>Save as Draft</button> 
                                    {!loading && <button onClick={(e)=>handleAction(e)}>Save Change</button>}
                                    {loading && <button disabled={loading} className='loading-dot' onClick={()=>handleAction()}>
                                    <div className="dot-flashing"></div></button>}
                                </div>
                            </form>
                        </div>
                    </div>
        </div>
  )
}

export default AdminBlogEdit