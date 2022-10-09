import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext';
import Image from 'next/image'

const CancelSubscriptionPlan = () => {
    const {subscriptionPopState, setSubscriptionPopState} = useContext(MainContext);

    const closePop = (e) => {
        e.preventDefault();
        setSubscriptionPopState({...subscriptionPopState, cancelPop: !subscriptionPopState.cancelPop});
    }
  return (
    <div className="cancel_subscription_pop pop_background flex_row">
        <div className="cancel_subscription_pop_wrap">
            <div className="cancel_subscription_pop_header flex_row">
                <div className="cancel_subscription_col">
                    <p>Cancel subscription plan</p>
                </div>
                <div className="cancel_subscription_col flex_row">
                    <img  alt="sendit" onClick={closePop} src="/svg/close_small.svg" />
                </div>
            </div>
            <div className="subscription_content_can">
                <p>Are you sure you want to cancel your subscription plan?
                    you will lose all data related to this plan. your account will still be act
                    iive but limited to features related to the status of your account. you 
                    will not be able to submit and track items.</p>
            </div>
            <div className="subscription_con_action flex_row">
                <button onClick={closePop}>stay with us</button>
                <button>Cancel my subscription plan</button>
            </div>
        </div>
    </div>
  )
}

export default CancelSubscriptionPlan