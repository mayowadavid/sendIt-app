import React, { useState } from "react";
import ReplyCard from "./replyCard";
import { formatDate } from "../functions/function";
import CommentInput from "./commentInput";

const CommentCard = ({comments}) => {
  const [reply, setReply] = useState(false);
  const inputDate = new Date(comments?.createdAt);
  const date = formatDate(inputDate);
  //console.log(comments);
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
          <div className="reply_button flex_row">
            <p onClick={() => setReply(!reply)}>Reply</p>
          </div>
        </div>
        {
            reply && (
            comments?.child.map((child, k)=> <ReplyCard key={k} child={child} />))
        }
        {reply == true && (<CommentInput parentId={comments.id} />)}
      </div>
    </>
  );
};

export default CommentCard;
