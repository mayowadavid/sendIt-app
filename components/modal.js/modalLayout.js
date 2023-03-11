import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/mainContext";
const ModalLayout = (props) => {
    const { subscriptionPopState, setSubscriptionPopState } = useContext(MainContext);
    const { name, headerName } = props
    console.log(name, headerName);
    const closeModal = (e) => {
        console.log(e)
        setSubscriptionPopState({
            ...subscriptionPopState,
            [name]: !subscriptionPopState[name]
        })
    };

    return (
        <>
        <div className="wallet_body_pop_col flex_row">
            <div className="wallet_body_container">
            <div className="wallet_body_header flex_row">
                    <div className="wallet_pop_title">
                        <p>{headerName}</p>
                    </div>
                    <div onClick={closeModal} className="wallet_pop_cancel flex_row">
                        <img src="svg/cross.svg" alt="" />
                    </div>
            </div>
                {props.children}
            </div>
            <div onClick={closeModal} className="wallet_pop"></div>
        </div>
        </>
        
    )
}

export default ModalLayout;