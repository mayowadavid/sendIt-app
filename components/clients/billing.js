import Header from '../general/header'
import Sidebar from '../general/sidebar'
import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/mainContext";

const Billing = () => {
    const { setSideState, subscriptionPopState, setSubscriptionPopState } = useContext(MainContext);

    const initialState = {
        zipCode: "",
        cardName: "",
        cardNumber: "",
        expiryDate: "",
    }

    const [billingData, setBillingData] = useState(initialState);

    const [billingState, setBillingState] = useState(false);

    useEffect(()=> {
        setSideState({
            wallet: true
        });
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setBillingData({...billingData, [name]: value});
    }

    const handleBilling = (e) => {
        e.preventDefault();
        setBillingState(!billingState);
    }

    const handleSubscription = (e) => {
        e.preventDefault();
        setSubscriptionPopState({...subscriptionPopState, mainPop: !subscriptionPopState.mainPop})
    }

  return (
    <div className="body_layout flex_row">
        <Sidebar />
        <div className="right_wrap xl10">
            <Header />
            <div className="inner_space xl-pad5">
                <div className="settings_header">
                    <p>Subscription</p>
                </div>
                <div className="subscription_wrap  l10">
                    <div className="subscription_header flex_row">
                        <div onClick={handleSubscription} className="subscription_header_col m5">
                            <p>My subscription plan</p>
                        </div>
                        <div className="subscription_header_col m5 active_sub">
                            <p>Billing info</p>
                        </div>
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con m5">
                            <p>Billing Zip Code</p>
                        </div>
                        {billingState == true ? 
                        <input className="subscription_con m5" type="number" onChange={handleChange} placeholder='zip code' name="zipCode"/> :
                        <div className="subscription_con m5">
                            <p>94115</p>
                        </div>}
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con m5">
                            <p>Card Name</p>
                        </div>
                        {billingState == true ? 
                        <input className="subscription_con m5" type="text" onChange={handleChange} placeholder='card name' name="cardName"/> :
                        <div className="subscription_con m5">
                            <p>John Doe</p>
                        </div>}
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con m5">
                            <p>Card Number</p>
                        </div>
                        {billingState == true ? 
                        <input className="subscription_con m5" type="number" onChange={handleChange} placeholder='card number' name="cardNumber"/> :
                        <div className="subscription_con m5">
                            <p>xxxxxxxxx00005</p>
                        </div>}
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con m5">
                            <p>Expiry Date</p>
                        </div>
                        {billingState == true ? 
                        <input className="subscription_con m5" type="text" onChange={handleChange} placeholder='expiry date' name="expiryDate"/> :
                        <div className="subscription_con m5">
                            <p>07/21</p>
                        </div>}
                    </div>
                    <div onClick={handleBilling} className="subscription_button">
                        { billingState == true ? <p>Submit</p> : <p>Edit Data</p> }
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Billing