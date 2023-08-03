import React, { useState } from 'react'
import CommentInput from './commentInput';
import { formatDate } from '../functions/function';

const ReplyCard = ({child, fetchComments}) => {
    const [reply, setReply] = useState(false);
    const [comment, setComment] = useState(false);
    const inputDate = new Date(child?.createdAt);
    const date = formatDate(inputDate);

    const handleNewComment = () => {
      setReply(!reply);
      setComment(!comment);
    }
    return (
      <div className="reply_box mbw-fi-s flex_row mbw10 xl10">
        <div className="comment_avatar flex_row mbw1">
          <div className="comment_avatar_background flex_row">
            <p>M</p>
          </div>
        </div>
        <div className="main_comment mbw9">
          <div className="comment_box_section mbw10">
            <div className="comment_name flex_row remove_margin">
              <p>{child?.name || '--'}</p>
              <p>{date}</p>
            </div>
            <div className="reply_text mbw10">
              <p>{child?.description}</p>
            </div>
            <div className="flex_row mbw-fi-c comment_button">
              <div className="reply_button flex_row">
                <p onClick={() => setReply(!reply)}>Replies</p>
              </div>
              <div className="comment_icon flex_row">
                <img onClick={() => setComment(!comment)} src="/svg/comment.svg"/>
              </div>
            </div>
          </div>
        </div>
        { comment && <CommentInput
         fetchComments={fetchComments} 
         parentId={child.id}
         handleNewComment={handleNewComment} 
         /> }
          {
            reply && (
            child?.child?.map(
            (child, k) => (<ReplyCard
            fetchComments={fetchComments}
            key={k} 
            child={child} />)))
          } 
      </div>
    );
  };

export default ReplyCard