import React, { useEffect, useState } from 'react'
import Button from '../general/button'
import { createMutation } from '../functions/function'
import { CREATE_COMMENT } from '../mutation/blog/blog'
import { useCreateMutation } from '../functions/customHook'

const CommentInput = ({blogId, parentId, fetchComments, handleNewComment}) => {
    const initialState = {
        name: '',
        email: '',
        description: ''
    }
    const [commentData, setCommentData] = useState(initialState);

    const {create, createComment} = useCreateMutation(CREATE_COMMENT);
    
    const submit = () => {
        createMutation(create, 'commentData', commentData);
        setCommentData(initialState);
        fetchComments();
        handleNewComment && handleNewComment();
    }


    const handleChange = ({target}) => {
        const {name, value} = target;
        setCommentData({...commentData, [name] : value, blogId, parentId});
    }

  return (
    <div className="comment_box mbw-fi-s flex_row mbw7 xl10">
            <div className="comment_box_section mbw-fi-s mbw10">
                <div className="comment_name remove_margin">
                    <input type="text" onChange={handleChange} value={commentData?.name} name="name" placeholder="Name" />
                    <input type="text" onChange={handleChange} value={commentData?.email} name="email" placeholder="Email" />
                </div>
                <div className="comment_text mbw10">
                    <textarea name="description" value={commentData?.description} onChange={handleChange} className="mbw10"/>
                </div>
                <div className="flex_row comment_button_wrapper">
                    <div className='comment_button'><p>Cancel</p></div>
                    <div onClick={submit} className='comment_button'><Button>Comment</Button></div>
                </div>
            </div>
        </div>
  )
}

export default CommentInput