import Header from '../general/header'
import Sidebar from '../general/sidebar'
import { useContext, useEffect } from "react"
import { MainContext } from "../context/mainContext";

const Billing = () => {
    const { setSideState } = useContext(MainContext);

    useEffect(()=> {
        setSideState({
            wallet: true
        });
    }, []);

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
                        <div className="subscription_header_col m5">
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
                        <div className="subscription_con m5">
                            <p>94115</p>
                        </div>
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con m5">
                            <p>Card Name</p>
                        </div>
                        <div className="subscription_con m5">
                            <p>John Doe</p>
                        </div>
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con m5">
                            <p>Card Number</p>
                        </div>
                        <div className="subscription_con m5">
                            <p>xxxxxxxxx00005</p>
                        </div>
                    </div>
                    <div className="subscription_row flex_row">
                        <div className="subscription_con m5">
                            <p>Expiry Date</p>
                        </div>
                        <div className="subscription_con m5">
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
  )
}

export default Billing