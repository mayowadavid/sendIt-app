import BlogListCard from "../../components/public_components/blog";
import React, { useEffect, useState } from "react";
import { useDataQuery } from "../../components/functions/customHook";
import { ALL_BLOG_POST } from "../../components/queries/blog/blog";
import { makeQuery, retrieveLength } from "../../components/functions/function";
import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter();
    const [blogRow, setBlogRow] = useState([]);
    const [pages, setPages] = useState([]);
    const [blogPage, setBlogPage] = useState({
        page: 1,
        limit: 3
    });
    const currentQuery = router.query;
    const { runQuery, result } = useDataQuery(ALL_BLOG_POST);
   
    // useEffect(()=> {
    //         (async() => {
    //             const {data, error} = await runQuery(
    //                 {
    //                     variables: {
    //                         blogPage,
    //                     }
    //                 }
    //             );
    //             data?.allBlogByPage?.content.length > 0 && 
    //             setBlogRow([...data?.allBlogByPage?.content]);
    //             setPages(retrieveLength(data?.allBlogByPage?.total, blogPage.limit));
    //         })();
    //   }, [])
    
      useEffect(()=>{
        const {index} = router.query;
            index !== undefined ? reFetchData(index): fetchData();
            console.log(index);
      }, [])

    const fetchData = async() => {
        const {data, error} = await runQuery(
            {
                variables: {
                    blogPage,
                }
            }
        );
        data?.allBlogByPage?.content.length > 0 && 
        setBlogRow([...data?.allBlogByPage?.content]);
        setPages(retrieveLength(data?.allBlogByPage?.total, blogPage.limit));
    }

    const reFetchData = async(page) => {
        blogPage = {...blogPage, page}
        const {data, error} = await runQuery(
            {
                variables: {
                    blogPage,
                }
            }
        );
        data?.allBlogByPage?.content.length > 0 && 
        setBlogRow([...data?.allBlogByPage?.content]);
        setPages(retrieveLength(data?.allBlogByPage?.total, blogPage.limit));
    }

      const nextPage = async(num) => {
        blogPage = {...blogPage, page: num}
        setBlogPage(blogPage);
            const {data: { allBlogByPage }, 
            error} = await runQuery(
                {
                    variables: {
                        blogPage,
                    }
                }
            );
            const newQuery = {
                ...currentQuery,
                index: blogPage.page
            };
            allBlogByPage?.content.length > 0 && 
            setBlogRow([...allBlogByPage?.content]);
            setPages(retrieveLength(allBlogByPage?.total, blogPage.limit));
            router.push({
                pathname: router.pathname,
                query: newQuery,
            });
            
      }

    return (
        <div>
            <header>
            <div className="post_header remove_margin  primary">
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
                    <div className="heroe_section mbw10 flex_row">
                        <div className="heroe_content l10 lcol lcenter mbw-fc-s  mbw5">
                            <div className="heroe_paragraph mbw-fc-s remove_margin">
                                <p className="mbw10 p-center">Welcome to sendit, be succesful</p>
                                <p className="mbw9 p-center">ship and transact anywhere</p>
                            </div>
                            <div className="heroe_button lrow l4 m8 lcenter remove_margin mbw8 mbw-gp5 flex_row">
                                <p className="btn-primary">Contact Us</p>
                                <p className="btn-primary">About Us</p>
                            </div>
                        </div>
                        <div className="heroe_content l-off mbw5">
                            <div className="heroe_image flex_row mbw-fi-s">
                                <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt=""/>
                            </div>
                        </div>
                    </div>
                
                    </div>
            </div>
            </header>
            <main>
            <div className="post_section">
                <div className="container xl10 xl-pad5">
                    <div className="blog_post_space mbw10 mbw-fi-s flex_row">
                        <div className="post_column_wrap xl10 mbw7">
                        <div className="post_header remove_margin ">
                            <p>Latest Blog Post</p>
                        </div>
                        <div className="post_card_column mbw10 flex_column">
                        { blogRow?.map((blog, k) => (
                            <BlogListCard 
                                blog={blog}
                                key={k} 
                            />
                            ))
                        }
                        </div>
                        <div className="mbw10 paginate flex_row">{pages?.map((d, k)=>
                        <button onClick={()=>nextPage(d)} className="btn" key={k}>{d}</button>)}</div>
                        </div>
                        <div className="post_column_wrap xl10 flex_row mbw3 mbw-fi-s mbw-jsty-btw xl-pad-u aside">
                            <div className="post_side_wrap mbw-fc-s m10 flex_column mbw10 xl45  ">
                                <div className="post_header remove_margin ">
                                    <p>Topics</p>
                                </div>
                                <div className="post_topics mbw10 flex_column">
                                    <div className="post_topic_row mbw10 flex_row">
                                        <div className="topic_image mbw3">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/blog-1.png`} alt=""/>
                                        </div>
                                        <div className="topic_content flex_row remove_margin mbw7">
                                            <p>Database</p>
                                        </div>
                                    </div>
                                    <div className="post_topic_row mbw10 flex_row">
                                        <div className="topic_image mbw3">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/blog-2.png`} alt=""/>
                                        </div>
                                        <div className="topic_content flex_row remove_margin mbw7">
                                            <p>Database</p>
                                        </div>
                                    </div>
                                    <div className="post_topic_row mbw10 flex_row">
                                        <div className="topic_image mbw3">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/blog-3.png`} alt=""/>
                                        </div>
                                        <div className="topic_content flex_row remove_margin mbw7">
                                            <p>Database</p>
                                        </div>
                                    </div>
                                    <div className="post_topic_row mbw10 flex_row">
                                        <div className="topic_image mbw3">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/blog-4.png`} alt=""/>
                                        </div>
                                        <div className="topic_content flex_row remove_margin mbw7">
                                            <p>Database</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post_side_wrap mbw-fc-s m10 flex_column mbw10 xl45  ">
                                <div className="post_header remove_margin ">
                                    <p>Tags</p>
                                </div>
                                <div className="post_tags wrap wrap mbw10 mbw-gp5 mb remove_margin flex_row">
                                    <p>#e-commerce</p>
                                    <p>#logistics</p>
                                    <p>#payment</p>
                                    <p>#withdraw</p>
                                    <p>#performance</p>
                                </div>
                            </div>
                            <div className="post_side_wrap mbw-fc-s m10 flex_column mbw10 xl45  ">
                                <div className="post_header remove_margin ">
                                    <p>News letters</p>
                                </div>
                                <div id="sticky" className="wrap mbw10 mbw-gp5 mb remove_margin flex_row">
                                    <p>Subscribe to our newsletter to be among the first to keep up with the latest updates.</p>
                                    <div className="news_form mbw10">
                                        <input type="text" name="" placeholder="Email" id=""/>
                                        <button>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default Blog;