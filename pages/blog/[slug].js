import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../components/context/mainContext";
import { makeQuery, formatDate, Axios } from "../../components/functions/function";
import CommentInput from "../../components/public_components/commentInput";
import CommentCard from "../../components/public_components/commentCard";

 const SingleBlog = () => {
    const initialState = {
        description: '',
        name: '',
        createdAt: '',
        file: {
            image: ''
        }
    }
    const [blogData, setBlogData] = useState(initialState);

    const {
        router,
        findSingleBlog
    } = useContext(MainContext);

    const { slug } = router.query;

    useEffect(() => {
        if (slug) {
          const name = slug.replace(/-/g, " ");
          fetchSlugData(name);
        }
    }, [slug]);


    const fetchComments = async (blog) => {
        const result = await Axios('get', 
        `/comments/fetchComments?blogId=${blog.id}`);
        setBlogData({...blog, comments: result.data});
        console.log(result);
    }

const fetchSlugData = async (name) => {
    const variable = "blogName";
    const result = await makeQuery(findSingleBlog, name, variable);
    if (result) {
        const data = result.findBlogByName;
        await setBlogData(data);
        if(data){
            fetchComments(data);
        }
    }
    };
    
    const inputDate = new Date(blogData?.createdAt);
    const date = formatDate(inputDate);
  return (
    <div>
    <div className="container xl10 xl-pad5">
        <nav className="blog_header mbw10 flex_row">
            <div className="blog_logo remove_margin mbw-fc-s mbw6 xl5">
                <p>Sendit</p>
            </div>
            <div className="blog_nav mbw-gp15 flex_row mbw-flx-rgt remove_margin mbw4 xl5">
                <p>home</p>
                <p>About Us</p>
                <p>Contact</p>
            </div>
      </nav>
    </div>
    <div className="single-post-body mbw10">
        <div className="container xl10  flex_row">
            <div className="post-body-con mbw9 xl10 xl-pad5">
                <div className="single-page-image flex_row mbw10">
                    <img className="mb10" src={blogData?.file?.image} alt=""/>
                </div>
                <div className="single-post-thumbnail flex_row">
                    <p>Homepage</p>
                    <p>{blogData?.category?.name}</p>
                </div>
                <div className="single-post-detail flex_row mbw-fi-s">
                    <div className="single-post-title mbw8 xl10 remove_margin">
                        <p>{blogData?.name}</p>
                    </div>
                    <div className="single-post-author mbw-gp5 xl8 mbw2 flex_row">
                        <div className="single-post-author">
                            <img src={`/img/blog-1.png`} alt=""/>
                        </div>
                        <div className="single-post-auth-con remove_margin flex_column">
                            <p>Jen San Antonio</p>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
                <div className="single-post-content flex_column">
                <div dangerouslySetInnerHTML={{ __html: blogData?.description }}></div>
                </div>
            </div>
            <div className="comment_box_wrapper flex_column mbw10">
                    <CommentInput blogId={blogData?.id} />
                    {
                        blogData?.comments?.length > 0 && (
                        <div className="comment_box mbw-fi-s flex_row mbw7 xl10">
                        {blogData?.comments.map((comments, k)=> <CommentCard key={k} comments={comments} />)}
                        </div>)}
            </div>
        </div>
    </div>
    </div>
  )
}

export default SingleBlog