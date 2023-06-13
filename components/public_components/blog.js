import React from "react";
import { formatDate, removeSpecialCharacters } from "../functions/function";

const BlogListCard = ({blog}) => {
    const plainDescription = removeSpecialCharacters(blog?.descriptionMarkDown);
    const inputDate = new Date(blog?.createdAt);
    const date = formatDate(inputDate);

    //preview function
  const preview = () => {
    const url = `/blog/${blog.slug}`
    window.open(url, '_blank');
  }
    
  return (
    <div onClick={preview} className="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
      <div className="post_card_image mbw4 m10">
        <img
          className="m10"
          src={blog?.file?.image || "../../svg/no_caption.svg"}
          alt=""
        />
      </div>
      <div className="blog_card_content m10 flex_row mbw55 mbw-fi-s">
      <div className="mbw10">
            <div className="blog_tag mbw4 xl-off mbw-mbtm3 remove_margin">
            <p>{blog?.category?.name || "--"}</p>
            </div>
        </div>
        <div className="mbw10">
            <div className="blog_title mbw-mbtm3 remove_margin">
            <p>{blog?.name || "--"}</p>
            </div>
        </div>
        <div className="blog_content mbw-mbtm3 remove_margin">
          <p>{plainDescription || "--"}</p>
        </div>
        <div className="blog_con_foot l-off mbw10 flex_row">
          <div className="author_image mbw1">
            <img src={
            blog?.user?.profile?.file?.image || 
            "../../svg/no_caption.svg"} alt="" />
          </div>
          <div className="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
            <p>{blog?.user?.userName}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
