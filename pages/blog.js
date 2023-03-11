const Blog = () => {
    return (
        <div>
            <header>
            <div class="post_header remove_margin  primary">
                <div class="container xl10 xl-pad5">

                    <nav class="blog_header mbw10 flex_row">
                            <div class="blog_logo remove_margin mbw-fc-s mbw6 xl5">
                                <p>Sendit</p>
                            </div>
                            <div class="blog_nav mbw-gp15 flex_row mbw-flx-rgt remove_margin mbw4 xl5">
                                <p>home</p>
                                <p>About Us</p>
                                <p>Contact</p>
                            </div>
                    </nav>
                    <div class="heroe_section mbw10 flex_row">
                        <div class="heroe_content l10 lcol lcenter mbw-fc-s  mbw5">
                            <div class="heroe_paragraph mbw-fc-s remove_margin">
                                <p class="mbw10 p-center">Welcome to sendit, be succesful</p>
                                <p class="mbw9 p-center">ship and transact anywhere</p>
                            </div>
                            <div class="heroe_button lrow l4 m8 lcenter remove_margin mbw8 mbw-gp5 flex_row">
                                <p class="btn-primary">Contact Us</p>
                                <p class="btn-primary">About Us</p>
                            </div>
                        </div>
                        <div class="heroe_content l-off mbw5">
                            <div class="heroe_image flex_row mbw-fi-s">
                                <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt=""/>
                            </div>
                        </div>
                    </div>
                
                    </div>
            </div>
            </header>

            <main>
            <div class="post_section">
                <div class="container xl10 xl-pad5">
                    <div class="blog_post_space mbw10 mbw-fi-s flex_row">
                        <div class="post_column_wrap xl10 mbw7">
                        <div class="post_header remove_margin ">
                            <p>Latest Blog Post</p>
                        </div>
                        <div class="post_card_column mbw10 flex_column">
                            <div class="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
                                <div class="post_card_image mbw4 m10">
                                    <img class="m10" src={`${process.env.NEXT_SITE_URL}/img/blog-1.png`} alt="" />
                                </div>
                                <div class="blog_card_content m10 flex_row mbw55 mbw-fi-s">
                                    <div class="blog_tag xl-off mbw-mbtm3 remove_margin">
                                        <p>Database</p>
                                    </div>
                                    <div class="blog_title mbw-mbtm3 remove_margin">
                                        <p>
                                            Building microservices with Dropwizard, MongoDB & Docker
                                        </p>
                                    </div>
                                    <div class="blog_content mbw-mbtm3 remove_margin">
                                        <p>
                                            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                                            relational
                                            databases, easy to use and the multi-platform is the best option for scale up and have fault
                                            tolerance, load balancing,
                                            map reduce, etc.
                                        </p>
                                    </div>
                                    <div class="blog_con_foot l-off mbw10 flex_row">
                                        <div class="author_image mbw1">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt="" />
                                        </div>
                                        <div class="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
                                            <p>Julia Walker</p>
                                            <p>Jan 17, 2022 - 3 min</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
                                <div class="post_card_image mbw4 m10">
                                    <img class="m10" src={`${process.env.NEXT_SITE_URL}/img/blog-2.png`} alt="" />
                                </div>
                                <div class="blog_card_content m10 flex_row mbw55 mbw-fi-s">
                                    <div class="blog_tag xl-off mbw-mbtm3 remove_margin">
                                        <p>Database</p>
                                    </div>
                                    <div class="blog_title mbw-mbtm3 remove_margin">
                                        <p>
                                            Building microservices with Dropwizard, MongoDB & Docker
                                        </p>
                                    </div>
                                    <div class="blog_content mbw-mbtm3 remove_margin">
                                        <p>
                                            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                                            relational
                                            databases, easy to use and the multi-platform is the best option for scale up and have fault
                                            tolerance, load balancing,
                                            map reduce, etc.
                                        </p>
                                    </div>
                                    <div class="blog_con_foot l-off mbw10 flex_row">
                                        <div class="author_image mbw1">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt="" />
                                        </div>
                                        <div class="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
                                            <p>Julia Walker</p>
                                            <p>Jan 17, 2022 - 3 min</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
                                <div class="post_card_image mbw4 m10">
                                    <img class="m10" src={`${process.env.NEXT_SITE_URL}/img/blog-3.png`} alt="" />
                                </div>
                                <div class="blog_card_content m10 flex_row mbw55 mbw-fi-s">
                                    <div class="blog_tag xl-off mbw-mbtm3 remove_margin">
                                        <p>Database</p>
                                    </div>
                                    <div class="blog_title mbw-mbtm3 remove_margin">
                                        <p>
                                            Building microservices with Dropwizard, MongoDB & Docker
                                        </p>
                                    </div>
                                    <div class="blog_content mbw-mbtm3 remove_margin">
                                        <p>
                                            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                                            relational
                                            databases, easy to use and the multi-platform is the best option for scale up and have fault
                                            tolerance, load balancing,
                                            map reduce, etc.
                                        </p>
                                    </div>
                                    <div class="blog_con_foot l-off mbw10 flex_row">
                                        <div class="author_image mbw1">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt="" />
                                        </div>
                                        <div class="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
                                            <p>Julia Walker</p>
                                            <p>Jan 17, 2022 - 3 min</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
                                <div class="post_card_image mbw4 m10">
                                    <img class="m10" src={`${process.env.NEXT_SITE_URL}/img/blog-4.png`} alt="" />
                                </div>
                                <div class="blog_card_content m10 flex_row mbw55 mbw-fi-s">
                                    <div class="blog_tag xl-off mbw-mbtm3 remove_margin">
                                        <p>Database</p>
                                    </div>
                                    <div class="blog_title mbw-mbtm3 remove_margin">
                                        <p>
                                            Building microservices with Dropwizard, MongoDB & Docker
                                        </p>
                                    </div>
                                    <div class="blog_content mbw-mbtm3 remove_margin">
                                        <p>
                                            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                                            relational
                                            databases, easy to use and the multi-platform is the best option for scale up and have fault
                                            tolerance, load balancing,
                                            map reduce, etc.
                                        </p>
                                    </div>
                                    <div class="blog_con_foot l-off mbw10 flex_row">
                                        <div class="author_image mbw1">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt="" />
                                        </div>
                                        <div class="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
                                            <p>Julia Walker</p>
                                            <p>Jan 17, 2022 - 3 min</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
                                <div class="post_card_image mbw4 m10">
                                    <img class="m10" src={`${process.env.NEXT_SITE_URL}/img/blog-5.png`} alt="" />
                                </div>
                                <div class="blog_card_content m10 flex_row mbw55 mbw-fi-s">
                                    <div class="blog_tag xl-off mbw-mbtm3 remove_margin">
                                        <p>Database</p>
                                    </div>
                                    <div class="blog_title mbw-mbtm3 remove_margin">
                                        <p>
                                            Building microservices with Dropwizard, MongoDB & Docker
                                        </p>
                                    </div>
                                    <div class="blog_content mbw-mbtm3 remove_margin">
                                        <p>
                                            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                                            relational
                                            databases, easy to use and the multi-platform is the best option for scale up and have fault
                                            tolerance, load balancing,
                                            map reduce, etc.
                                        </p>
                                    </div>
                                    <div class="blog_con_foot l-off mbw10 flex_row">
                                        <div class="author_image mbw1">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt="" />
                                        </div>
                                        <div class="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
                                            <p>Julia Walker</p>
                                            <p>Jan 17, 2022 - 3 min</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
                                <div class="post_card_image mbw4 m10">
                                    <img class="m10" src={`${process.env.NEXT_SITE_URL}/img/blog-6.png`} alt="" />
                                </div>
                                <div class="blog_card_content m10 flex_row mbw55 mbw-fi-s">
                                    <div class="blog_tag xl-off mbw-mbtm3 remove_margin">
                                        <p>Database</p>
                                    </div>
                                    <div class="blog_title mbw-mbtm3 remove_margin">
                                        <p>
                                            Building microservices with Dropwizard, MongoDB & Docker
                                        </p>
                                    </div>
                                    <div class="blog_content mbw-mbtm3 remove_margin">
                                        <p>
                                            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                                            relational
                                            databases, easy to use and the multi-platform is the best option for scale up and have fault
                                            tolerance, load balancing,
                                            map reduce, etc.
                                        </p>
                                    </div>
                                    <div class="blog_con_foot l-off mbw10 flex_row">
                                        <div class="author_image mbw1">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt="" />
                                        </div>
                                        <div class="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
                                            <p>Julia Walker</p>
                                            <p>Jan 17, 2022 - 3 min</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
                                <div class="post_card_image mbw4 m10">
                                    <img class="m10" src={`${process.env.NEXT_SITE_URL}/img/blog-7.png`} alt="" />
                                </div>
                                <div class="blog_card_content m10 flex_row mbw55 mbw-fi-s">
                                    <div class="blog_tag xl-off mbw-mbtm3 remove_margin">
                                        <p>Database</p>
                                    </div>
                                    <div class="blog_title mbw-mbtm3 remove_margin">
                                        <p>
                                            Building microservices with Dropwizard, MongoDB & Docker
                                        </p>
                                    </div>
                                    <div class="blog_content mbw-mbtm3 remove_margin">
                                        <p>
                                            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                                            relational
                                            databases, easy to use and the multi-platform is the best option for scale up and have fault
                                            tolerance, load balancing,
                                            map reduce, etc.
                                        </p>
                                    </div>
                                    <div class="blog_con_foot l-off mbw10 flex_row">
                                        <div class="author_image mbw1">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt="" />
                                        </div>
                                        <div class="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
                                            <p>Julia Walker</p>
                                            <p>Jan 17, 2022 - 3 min</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
                                <div class="post_card_image mbw4 m10">
                                    <img class="m10" src={`${process.env.NEXT_SITE_URL}/img/blog-8.png`} alt="" />
                                </div>
                                <div class="blog_card_content m10 flex_row mbw55 mbw-fi-s">
                                    <div class="blog_tag xl-off mbw-mbtm3 remove_margin">
                                        <p>Database</p>
                                    </div>
                                    <div class="blog_title mbw-mbtm3 remove_margin">
                                        <p>
                                            Building microservices with Dropwizard, MongoDB & Docker
                                        </p>
                                    </div>
                                    <div class="blog_content mbw-mbtm3 remove_margin">
                                        <p>
                                            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                                            relational
                                            databases, easy to use and the multi-platform is the best option for scale up and have fault
                                            tolerance, load balancing,
                                            map reduce, etc.
                                        </p>
                                    </div>
                                    <div class="blog_con_foot l-off mbw10 flex_row">
                                        <div class="author_image mbw1">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt="" />
                                        </div>
                                        <div class="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
                                            <p>Julia Walker</p>
                                            <p>Jan 17, 2022 - 3 min</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="post_cards mbw-gp5 flex_row mbw-fi-c mbw10">
                                <div class="post_card_image mbw4 m10">
                                    <img class="m10" src={`${process.env.NEXT_SITE_URL}/img/blog-9.png`} alt="" />
                                </div>
                                <div class="blog_card_content m10 flex_row mbw55 mbw-fi-s">
                                    <div class="blog_tag xl-off mbw-mbtm3 remove_margin">
                                        <p>Database</p>
                                    </div>
                                    <div class="blog_title mbw-mbtm3 remove_margin">
                                        <p>
                                            Building microservices with Dropwizard, MongoDB & Docker
                                        </p>
                                    </div>
                                    <div class="blog_content mbw-mbtm3 remove_margin">
                                        <p>
                                            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
                                            relational
                                            databases, easy to use and the multi-platform is the best option for scale up and have fault
                                            tolerance, load balancing,
                                            map reduce, etc.
                                        </p>
                                    </div>
                                    <div class="blog_con_foot l-off mbw10 flex_row">
                                        <div class="author_image mbw1">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/hero.png`} alt="" />
                                        </div>
                                        <div class="author_name mbw9 mbw remove_margin flex_column mbw-fi-s">
                                            <p>Julia Walker</p>
                                            <p>Jan 17, 2022 - 3 min</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        </div>
                        <div class="post_column_wrap xl10 flex_row mbw3 mbw-fi-s mbw-jsty-btw xl-pad-u aside">
                            <div class="post_side_wrap mbw-fc-s m10 flex_column mbw10 xl45  ">
                                <div class="post_header remove_margin ">
                                    <p>Topics</p>
                                </div>
                                <div class="post_topics mbw10 flex_column">
                                    <div class="post_topic_row mbw10 flex_row">
                                        <div class="topic_image mbw3">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/blog-1.png`} alt=""/>
                                        </div>
                                        <div class="topic_content flex_row remove_margin mbw7">
                                            <p>Database</p>
                                        </div>
                                    </div>
                                    <div class="post_topic_row mbw10 flex_row">
                                        <div class="topic_image mbw3">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/blog-2.png`} alt=""/>
                                        </div>
                                        <div class="topic_content flex_row remove_margin mbw7">
                                            <p>Database</p>
                                        </div>
                                    </div>
                                    <div class="post_topic_row mbw10 flex_row">
                                        <div class="topic_image mbw3">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/blog-3.png`} alt=""/>
                                        </div>
                                        <div class="topic_content flex_row remove_margin mbw7">
                                            <p>Database</p>
                                        </div>
                                    </div>
                                    <div class="post_topic_row mbw10 flex_row">
                                        <div class="topic_image mbw3">
                                            <img src={`${process.env.NEXT_SITE_URL}/img/blog-4.png`} alt=""/>
                                        </div>
                                        <div class="topic_content flex_row remove_margin mbw7">
                                            <p>Database</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="post_side_wrap mbw-fc-s m10 flex_column mbw10 xl45  ">
                                <div class="post_header remove_margin ">
                                    <p>Tags</p>
                                </div>
                                <div class="post_tags wrap wrap mbw10 mbw-gp5 mb remove_margin flex_row">
                                    <p>#e-commerce</p>
                                    <p>#logistics</p>
                                    <p>#payment</p>
                                    <p>#withdraw</p>
                                    <p>#performance</p>
                                </div>
                            </div>
                            <div class="post_side_wrap mbw-fc-s m10 flex_column mbw10 xl45  ">
                                <div class="post_header remove_margin ">
                                    <p>News letters</p>
                                </div>
                                <div id="sticky" class="wrap mbw10 mbw-gp5 mb remove_margin flex_row">
                                    <p>Subscribe to our newsletter to be among the first to keep up with the latest updates.</p>
                                    <div class="news_form mbw10">
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