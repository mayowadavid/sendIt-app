import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'
import Image from 'next/image'

const SubscriptionPlan = () => {
    const {subscriptionPopState, setSubscriptionPopState} = useContext(MainContext);

    const closeMainPop = (e) => {
        e.preventDefault();
        setSubscriptionPopState({...subscriptionPopState, mainPop: !subscriptionPopState.mainPop});
    }

    const openCancelPop = (e) => {
        e.preventDefault();
        setSubscriptionPopState({...subscriptionPopState, cancelPop: !subscriptionPopState.cancelPop});
    }

  return (
    <div className="subscription_pop flex_row">
        <div className="subscription_pop_wrap xl9 xl-h9 l-h8 m10 ">
            <div className="subscription_pop_header flex_row" >
                <div className="subscription_col">
                    <p>Edit Subscription Plan</p>
                </div>
                <div className="subscription_col flex_row">
                    <Image alt="sendit" onClick={closeMainPop} src="/svg/close_small.svg" />
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
                    <p onClick={openCancelPop}>Cancel My Subscription plan</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscriptionPlan