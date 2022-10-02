import React from 'react'

const SubscriptionPlan = () => {
  return (
    <>
        <div className="subscription_pop flex_row">
        <div className="subscription_pop_wrap xl9 xl-h9 l-h8 m10 ">
            <div className="subscription_pop_header flex_row" >
                <div className="subscription_col">
                    <p>Edit Subscription Plan</p>
                </div>
                <div className="subscription_col flex_row">
                    <img src="/svg/close_small.svg" alt=""/>
                </div>
            </div>
            <div className="subscription_inner_wrap">
                <div className="sub_inner_header_row flex_row">
                    <div className="sub_inner_title sm10">
                        <p>Choose your monthly plan</p>
                    </div>
                    <div className="sub_inner_title sm10 sm-jsty-left flex_row">
                        <div className="sub_switch">
                            <p>{"<"}</p>
                        </div>
                        <div className="sub_switch">
                            <p>Other plans</p>
                        </div>
                        <div className="sub_switch">
                            <p>{">"}</p>
                        </div>
                    </div>
                </div>
                <div className="sub_inner_con flex_row">
                    <div className="flex_card sm10 sm-mg-tp10 flex_column">
                        <div className="card_content">
                            <p>Biannual plan</p>
                        </div>
                        <div className="card_content_middle">
                            <p>6 months</p>
                        </div>
                        <div className="card_content">
                            <p>$60</p>
                        </div>
                        <div className="card_button">
                            <p>upgrade</p>
                        </div>
                    </div>
                    <div className="flex_card sm10 sm-mg-tp10 active_card flex_column">
                        <div className="card_content">
                            <p>Free plan</p>
                        </div>
                        <div className="card_content_middle">
                            <p>1 month</p>
                        </div>
                        <div className="card_content">
                            <p>$0</p>
                        </div>
                        <div className="card_button active_button">
                            <p>Your Plan</p>
                        </div>
                    </div>
                    <div className="flex_card sm10 sm-mg-tp10 flex_column">
                        <div className="card_content">
                            <p>Annual plan</p>
                        </div>
                        <div className="card_content_middle">
                            <p>12 months</p>
                        </div>
                        <div className="card_content">
                            <p>$1000</p>
                        </div>
                        <div className="card_button">
                            <p>Upgrade</p>
                        </div>
                    </div>
                </div>
                <div className="cancel_subscription">
                    <p>Cancel My Subscription plan</p>
                </div>
            </div>
        </div>
    </div>
    <div className="body_layout flex_row">
        <div className="side_bar_wrap flex_column">
            <div className="logo">

            </div>
            <div className="side_middle_wrap">
                <div className="profile_icon icon_wrap">
                    <img src="svg/profile.svg" alt=""/>
                </div>
                <div className="box_icon icon_wrap">
                    <img src="svg/box.svg" alt=""/>
                </div>
                <div className="transaction_icon icon_wrap">
                    <img src="svg/transaction.svg" alt=""/>
                </div>
                <div className="wallet_icon icon_wrap">
                    <img src="svg/wallet.svg" alt=""/>
                </div>
            </div>
            <div className="side_footer_wrap">
                <div className="settings_icon icon_wrap">
                    <img src="svg/setting.svg" alt=""/>
                </div>
                <div className="logOut_icon icon_wrap">
                    <img src="svg/logout.svg" alt=""/>
                </div>
            </div>
        </div>
        <div className="right_wrap">
            <div className="header flex_row">
                <div className="message_icon top_wrap">
                    <img src="svg/chat.svg" alt=""/>
                </div>
                <div className="notifications_icon top_wrap">
                    <img src="svg/notification.svg" alt=""/>
                </div>
                <div className="avatar_wrap flex_row">
                    <div className="avatar_icon">
                        <img src="svg/avatar.svg" alt=""/>
                    </div>
                    <p>David</p>
                    <img src="svg/drop-arrow.svg" alt=""/>
                </div>
            </div>
            <div className="inner_space">
                <div className="settings_header">
                    <p>Subscription</p>
                </div>
                <div className="subscription_wrap">
                    <div className="subscription_header flex_row">
                        <div className="subscription_header_col">
                            <p>My subscription plan</p>
                        </div>
                        <div className="subscription_header_col active_sub">
                            <p>Billing info</p>
                        </div>
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con">
                            <p>Billing Zip Code</p>
                        </div>
                        <div className="subscription_con">
                            <p>94115</p>
                        </div>
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con">
                            <p>Card Name</p>
                        </div>
                        <div className="subscription_con">
                            <p>John Doe</p>
                        </div>
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con">
                            <p>Card Number</p>
                        </div>
                        <div className="subscription_con">
                            <p>xxxxxxxxx00005</p>
                        </div>
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con">
                            <p>Expiry Date</p>
                        </div>
                        <div className="subscription_con">
                            <p>07/21</p>
                        </div>
                    </div>
                    <div className="subscription_button">
                        <p>Edit Data</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default SubscriptionPlan