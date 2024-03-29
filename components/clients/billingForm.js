import React from 'react'
import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/mainContext";

export const BillingForm = () => {
    const initialState = {
        zipCode: "",
        cardName: "",
        cardNumber: "",
        expiryDate: "",
    }

    const [billingData, setBillingData] = useState(initialState);

    const [billingState, setBillingState] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setBillingData({...billingData, [name]: value});
    }

    const handleBilling = (e) => {
        e.preventDefault();
        setBillingState(!billingState);
    }
  return (
    <div>
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
  )
}
