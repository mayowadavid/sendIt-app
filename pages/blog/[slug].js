import React from 'react'

 const SingleBlog = () => {
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
            <div className="post-body-con mbw1 xl-off">

            </div>
            <div className="post-body-con mbw9 xl10 xl-pad5">
                <div className="single-page-image flex_row mbw10">
                    <img className="mb10" src={`${process.env.NEXT_SITE_URL}/img/blog-10.png`} alt=""/>
                </div>
                <div className="single-post-thumbnail flex_row">
                    <p>Logistics</p>
                    <p>Homepage</p>
                </div>
                <div className="single-post-detail flex_row mbw-fi-s">
                    <div className="single-post-title mbw8 xl10 remove_margin">
                        <p>Top 3 benefits of being a freelancer in the Philippines</p>
                    </div>
                    <div className="single-post-author mbw-gp5 xl8 mbw2 flex_row">
                        <div className="single-post-author">
                            <img src={`${process.env.NEXT_SITE_URL}/img/blog-1.png`} alt=""/>
                        </div>
                        <div className="single-post-auth-con remove_margin flex_column">
                            <p>Jen San Antonio</p>
                            <p>October 12, 2022</p>
                        </div>
                    </div>
                </div>
                <div className="single-post-content flex_column">
                    <p>1. More Family Time
                        According to the Philippine Online Freelancing Industry Study of the Department of Information and Communications Technology (DICT) through the ICT Industry Development Bureau, 19% of Filipinos have enjoyed more time with their families. With freelancing’s flexible schedule and being able to have complete control of it, it gives you the best of both worlds by doing jobs in the comfort of your own home and earning from local and international clients. This means more time to support and be with your family.
                        <br/>
                        <br/>
                        2. A Chance for Growth
                        The same study also mentioned that almost 17% of respondents say that freelancing had positively impacted their lives by having the chance for personal and professional growth. The best part of being a freelancer is that your work speaks for you – you can experiment with your skill set and upskill any time. You also have the power to be the best version of yourself.
                        <br/>
                        <br/>
                        3. Financial Stability
                        The study also revealed that 22% of respondents enjoy financial stability as freelancing provides them with multiple sources of income. This isn’t surprising as freelancing allows you to gain and access clients in an overseas location. With more opportunities in the global market, there is no limit on how much you can earn. You can raise your rates over time as you gain experience and build a strong reputation for yourself.
                        <br/>
                        <br/>
                        4. Build your global business from anywhere
                        Working with international clients can also be a great way to build your business from anywhere in the world. And of course, when doing business internationally, you need an easy way to get paid globally as well as having easy access to funds in major foreign currencies at all times.  
                        
                        That’s where Payoneer comes in and is why Payoneer is used by thousands of Filipino businesses to help them get paid in the currency that suits both them and their clients’ needs. Payoneer helps more and more Filipinos participate and succeed in the global digital economy. Plus, Payoneer makes it easy tos simply transfer funds between your Payoneer currency balances to get the currency you need.
                        <br/>
                        <br/>
                        The Payoneer mobile app also ensures secure online payment transactions that will help you to manage and stay on top of your global payments even when on the go. No matter where you are in the world, you can scale your business and immediately receive payment to your local bank account with Payoneer’s flexible withdrawal options and low-cost online payment solution.
                        
                        Connecting to GCash
                        By signing up and linking a Payoneer account via GCash, Filipino users can receive foreign currency overseas and withdraw the funds locally in PHP instantly for free via the GCash app. This enables freelancers to receive payments from global clients in foreign currencies like USD, EUR, GBP, AUD, and more.
                        
                        Isn’t it time your realized your potential and signed up to Payoneer?</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SingleBlog