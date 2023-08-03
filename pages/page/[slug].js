import React, { useContext, useState, useEffect } from "react";
import { formatDate, makeQuery } from "../../components/functions/function";
import { MainContext } from "../../components/context/mainContext";

const Page = () => {
  const {
    router,
    findSingleBlog
} = useContext(MainContext);
  const initialState = {
    description: '',
    name: '',
    createdAt: '',
    file: {
        image: ''
    }
}
const [blogData, setBlogData] = useState(initialState);
  const { slug } = router.query;

  useEffect(() => {
      if (slug) {
        fetchSlugData(slug);
      }
  }, [slug]);

  const fetchSlugData = async (name) => {
    const variable = "slugName";
    const result = await makeQuery(findSingleBlog, name, variable);
    if (result) {
        const data = result.findBlogBySlug;
        console.log('data', data);
        await setBlogData(data);
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
        <div className="single-post-body page-background mbw10">
          <div className="page_title mbw10 flex_row">
              <p>{blogData?.name}</p>
          </div>
          <div className="container inner-page xl10  flex_row">
            <div className="post-body-con mbw9 xl10 xl-pad5">
                <div className="single-post-content flex_column">
                    <div dangerouslySetInnerHTML={{ __html: blogData?.description }}></div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page