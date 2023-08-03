import React, { useState } from "react";
import ReplyCard from "./replyCard";
import { formatDate } from "../functions/function";
import CommentInput from "./commentInput";

const CommentCard = ({comments, fetchComments}) => {
  const [reply, setReply] = useState(false);
  const [comment, setComment] = useState(false);
  const inputDate = new Date(comments?.createdAt);
  const date = formatDate(inputDate);

  const handleNewComment = () => {
    setReply(!reply);
    setComment(!comment);
  }
  console.log(comments);
  return (
    <>
      <div className="comment_avatar flex_row mbw1">
        <div className="comment_avatar_background flex_row">
          <p>M</p>
        </div>
      </div>
      <div className="main_comment mbw9">
        <div className="comment_box_section mbw10">
          <div className="comment_name flex_row remove_margin">
            <p>{comments?.name || '--'}</p>
            <p>{date}</p>
          </div>
          <div className="comment_text mbw10">
            <p>{comments?.description}</p>
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
        {comment && (<CommentInput 
        fetchComments={fetchComments} 
        parentId={comments.id}
        handleNewComment={handleNewComment} />)}
        {
            reply && (
            comments?.child?.map((child, k)=> <ReplyCard 
            fetchComments={fetchComments} 
            key={k} child={child} />))
        }
      </div>
    </>
  );
};

export default CommentCard;
