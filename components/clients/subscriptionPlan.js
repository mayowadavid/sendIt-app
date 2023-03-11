import React, { useContext, useState } from 'react'
import { MainContext } from '../context/mainContext'

const SubscriptionPlan = () => {
    const {subscriptionPopState, setSubscriptionPopState} = useContext(MainContext);
    const [planIndex, setPlanIndex] = useState(0);
    const plans = [
            [
                { name: 'Biannual', month: '6 months', amount: '$100', active: false },
                 { name: 'Free', month: '1 month', amount: '$0', active: true },
                 { name: 'Annual', month: '12 month', amount: '$200', active: false },
            ],
            [
                { name: 'Biennial', month: '24 months', amount: '$350', active: false },
                 { name: 'Triennial', month: '36 month', amount: '$600', active: false },
            ]
    ]

    const closeMainPop = (e) => {
        e.preventDefault();
        setSubscriptionPopState({...subscriptionPopState, mainPop: !subscriptionPopState.mainPop});
    }

    const openCancelPop = (e) => {
        e.preventDefault();
        setSubscriptionPopState({...subscriptionPopState, cancelPop: !subscriptionPopState.cancelPop});
    }

    // move to next plan
    const nextCtrl = () => {
        if(planIndex !== plans.length - 1){
            setPlanIndex(planIndex + 1);
        }else{
            setPlanIndex(0);
        }
    }

    //move to previous plan
    const prevCtrl = () => {
        if(planIndex !== 0){
            setPlanIndex(planIndex - 1);
        }else{
            setPlanIndex(plans.length - 1);
        }
    }

  return (
    <div className="subscription_pop flex_row">
        <div className="subscription_pop_wrap xl9 xl-h9 l-h8 m10 ">
            <div className="subscription_pop_header flex_row" >
                <div className="subscription_col">
                    <p>Edit Subscription Plan</p>
                </div>
                <div className="subscription_col flex_row">
                    <img  alt="sendit" onClick={closeMainPop} src="/svg/close_small.svg" />
                </div>
            </div>
            <div className="subscription_inner_wrap">
                <div className="sub_inner_header_row flex_row">
                    <div className="sub_inner_title sm10">
                        <p>Choose your monthly plan</p>
                    </div>
                    <div className="sub_inner_title sm10 sm-jsty-left flex_row">
                        <div className="sub_switch">
                            <p onClick={prevCtrl}>{"<"}</p>
                        </div>
                        <div className="sub_switch">
                            <p>Other plans</p>
                        </div>
                        <div className="sub_switch">
                            <p onClick={nextCtrl}>{">"}</p>
                        </div>
                    </div>
                </div>
                <div className="sub_inner_con flex_row">
                {
                    plans[planIndex].map((plan, i)=>{
                       const {name, month, amount, active} = plan;
                        return (
                            <div key={i} className={`flex_card sm10 sm-mg-tp10 flex_column  ${active? 'active_card': ''}`}>
                                <div className="card_content">
                                    <p>{name}</p>
                                </div>
                                <div className="card_content_middle">
                                    <p>{month}</p>
                                </div>
                                <div className="card_content">
                                    <p>{amount}</p>
                                </div>
                                <div className="card_button">
                                    <p>{active? 'Your Plan': 'upgrade'}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                <div className="cancel_subscription">
                    <p onClick={openCancelPop}>Cancel My Subscription plan</p>
                </div>
            </div>
        </div>
        <div onClick={closeMainPop} className="wallet_pop"></div>
    </div>
  )
}

export default SubscriptionPlan