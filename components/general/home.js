import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div>
        <div className="homePage_top flex_column">
    <div className="homePage_content">
        <p className="sm10 m7 l7">Operate like a PRO for $1/month</p>
        <p className="sm10 m7 l7">The future of business is yours to shape. Sign up
        for a free trial and enjoy 3 months of sendit for
        $1/month on select plans.</p>
    </div>
    <div className="header_form sm9 m8 l8 smcol mcol flex_row">
        <input className="sm10 m10 l6 xl6" type="text" placeholder="Enter your email address" name="" id=""/>
        <button className="sm5 m5 l3 xl3 m-mg-tp5 sm-mg-tp5">Start free trial</button>
    </div>
    <div className="homePage_disclamer sm9 m69 l8">
        <p className="sm9 m69">30-days free trial, no credit card required. By entering your email you agreed to receive marketing emails
            from sendit.</p>
    </div>
</div>
<div className="homePage_showcase flex_column">
    <img  alt="sendit" src="/img/showcase.png" />
</div>
<div className="show_case_column smcol mcol lrow flex_row">
    <div className="show_case_slot sm10 m10 sm-mp-tp10 m-mg-tp10 l45 flex_column">
        <img  alt="sendit" src="/svg/track_board.svg" />
        <div className="show_front_content xl8 p-center">
            <p>Trackable Items</p>
            <p>Free website to track and send
                items quickly and easily.</p>
        </div>
    </div>
    <div className="show_case_slot sm10 m10 sm-mp-tp10 m-mg-tp10 l45 flex_column">
        <img  alt="sendit" src="/svg/wallet_front.svg" />
        <div className="show_front_content xl8 p-center">
            <p>Secure Funds</p>
            <p>Receive funds from foreign 
                clients. with free wallet system.</p>
        </div>
    </div>
    <div className="show_case_slot sm10 m10 sm-mp-tp10 m-mg-tp10 l45 l-mg-tp10 flex_column">
        <img  alt="sendit" src="/svg/member_front.svg" />
        <div className="show_front_content xl8 p-center">
            <p>Chat Systyem</p>
            <p>Easy and reliable chats system
                to send and receive message 
                between merchat and customers</p>
        </div>
    </div>
</div>
<div className="show_case_wrap">
    <div className="show_case_wrap_grad"></div>
    <div className="show_case_quote flex_column">
        <p className="sm8 m8">“Sendit is better than any
            other platfrom we have played
            with, we have played with 
           them all.”</p>
    </div>
</div>
<div className="show_case_action">
    <div className="action_show_content">
        <p>Make your logistics a reality for $1/month</p>
        <p>start your free trial and enjoy 3 months of sendit for $1/month on select plans.</p>
    </div>
    <div className="action_show_form sm9 m8 l8 smcol mcol flex_row">
        <input className="sm10 m10 l6 xl6" type="text" name="" id=""/>
        <button className="sm5 m5 l3 xl3 m-mg-tp5 sm-mg-tp5">Start free trial</button>
    </div>
    <div className="action_form_disclaim">
        <p>7 days free trial, no credit card required. By entering your email, uou agree to receive marketing emails from sendit. view terms and conditiions.</p>
    </div>
</div>
<div className="home_faq_wrap">
    <div className="home_faq_grad"></div>
    <div className="home_faq sm9 m9 flex_column">
        <div className="home_faq_header">
            <p>FAQ</p>
        </div>
        <div className="home_faq_wrap">
            <div className="home_faq_row flex_row">
                <p className="sm9 m9 l9">What is sendit and how does it work?</p>
                <p className="sm1 m1 l1 p-center">+</p>
            </div>
            <div className="home_faq_row flex_row">
                <p className="sm9 m9 l9">How much does sendit cost?</p>
                <p className="sm1 m1 l1 p-center">+</p>
            </div>
            <div className="home_faq_row flex_row">
                <p className="sm9 m9 l9">Will i be able to receive international payment?</p>
                <p className="sm1 m1 l1 p-center">+</p>
            </div>
            <div className="home_faq_row flex_row">
                <p className="sm9 m9 l9">Can i receive fund in crypto?</p>
                <p className="sm1 m1 l1 p-center">+</p>
            </div>
        </div>
    </div>
</div>
<div className="home_footer sm10 m10 l10 p-center">
    <p className="sm5 m5 l5">Terms of service</p>
    <p className="sm5 m5 l5">Privacy Policy</p>
</div>
    </div>
  )
}

export default HomePage;