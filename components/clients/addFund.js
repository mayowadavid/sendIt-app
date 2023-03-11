import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/mainContext";

const AddFund = () => {
    const { setSideState, subscriptionPopState, setSubscriptionPopState } = useContext(MainContext);
    const handlePop = (e, prop) => {
        e.preventDefault();
        setSubscriptionPopState({...subscriptionPopState, [prop]: !subscriptionPopState[prop]})
    }
  return (
    <div>
        <div className='wallet_container'>
            <div className="wallet_wrap flex_row">
                <div className="wallet_row flex_column">
                    <p>wallet amount</p>
                    <p>$1124.99</p>
                </div>
                <div className="wallet_row flex_column">
                    <p>withdrawn</p>
                    <p>$1000.99</p>
                </div>
                <div className="wallet_row flex_column">
                    <p>Used for purchase</p>
                    <p>$14</p>
                </div>
                <div className="wallet_row flex_column">
                    <p>Pending</p>
                    <p>$44.99</p>
                </div>
                <div className="wallet_row flex_column">
                    <p>Available for withdrawal</p>
                    <p>$124.99</p>
                </div>
            </div>
        </div>
        <div className="wallet_action flex_row">
            <div onClick={(e)=>handlePop(e, 'deposit')} className="deposit actions">
                <p>Deposit</p>
            </div>
            <div onClick={(e)=>handlePop(e, 'withdraw')} className="withdraw actions">
                <p>withdraw</p>
            </div>
        </div>
        <div className="wallet_history">
            <div className="transaction_header">
                <p>Wallet History</p>
            </div>
            <div className="wallet_table">
                <div className="transaction_table_header flex_row">
                    <div className="main_transaction_row flex_row">
                        <div className="main_row">
                            <p>Date</p>
                        </div>
                        <div className="main_row">
                            <p>Status</p>
                        </div>
                        <div className="main_row">
                            <p>Transaction id</p>
                        </div>
                        <div className="main_row">
                            <p>Location</p>
                        </div>
                    </div>
                    <div className="second_transaction_row flex_row">
                        <div className="main_row">
                            <p>Fees</p>
                        </div>
                        <div className="main_row">
                            <p>Amount</p>
                        </div>
                    </div>
                </div>
                <div className="transaction_table_body flex_column">
                    <div className="table_body_row flex_row">
                        <div className="main_transaction_row flex_row">
                            <div className="main_row">
                                <p>Oct 28, 21</p>
                            </div>
                            <div className="main_row">
                                <p>pending</p>
                            </div>
                            <div className="main_row">
                                <p>#bfjf9934nfni4</p>
                            </div>
                            <div className="main_row">
                                <p>Logos</p>
                            </div>
                        </div>
                        <div className="second_transaction_row flex_row">
                            <div className="main_row red_font">
                                <p>$400</p>
                            </div>
                            <div className="main_row red_font">
                                <p>$18.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="table_body_row flex_row">
                        <div className="main_transaction_row flex_row">
                            <div className="main_row">
                                <p>Oct 28, 21</p>
                            </div>
                            <div className="main_row">
                                <p>pending</p>
                            </div>
                            <div className="main_row">
                                <p>#bfjf9934nfni4</p>
                            </div>
                            <div className="main_row">
                                <p>Logos</p>
                            </div>
                        </div>
                        <div className="second_transaction_row flex_row">
                            <div className="main_row red_font">
                                <p>$400</p>
                            </div>
                            <div className="main_row red_font">
                                <p>$18.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="table_body_row flex_row">
                        <div className="main_transaction_row flex_row">
                            <div className="main_row">
                                <p>Oct 28, 21</p>
                            </div>
                            <div className="main_row">
                                <p>pending</p>
                            </div>
                            <div className="main_row">
                                <p>#bfjf9934nfni4</p>
                            </div>
                            <div className="main_row">
                                <p>Logos</p>
                            </div>
                        </div>
                        <div className="second_transaction_row flex_row">
                            <div className="main_row green_font">
                                <p>$400</p>
                            </div>
                            <div className="main_row green_font">
                                <p>$18.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="table_body_row flex_row">
                        <div className="main_transaction_row flex_row">
                            <div className="main_row">
                                <p>Oct 28, 21</p>
                            </div>
                            <div className="main_row">
                                <p>pending</p>
                            </div>
                            <div className="main_row">
                                <p>#bfjf9934nfni4</p>
                            </div>
                            <div className="main_row">
                                <p>Logos</p>
                            </div>
                        </div>
                        <div className="second_transaction_row flex_row">
                            <div className="main_row green_font">
                                <p>$400</p>
                            </div>
                            <div className="main_row green_font">
                                <p>$18.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="table_body_row flex_row">
                        <div className="main_transaction_row flex_row">
                            <div className="main_row">
                                <p>Oct 28, 21</p>
                            </div>
                            <div className="main_row">
                                <p>pending</p>
                            </div>
                            <div className="main_row">
                                <p>#bfjf9934nfni4</p>
                            </div>
                            <div className="main_row">
                                <p>Logos</p>
                            </div>
                        </div>
                        <div className="second_transaction_row flex_row">
                            <div className="main_row green_font">
                                <p>$400</p>
                            </div>
                            <div className="main_row green_font">
                                <p>$18.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="table_body_row flex_row">
                        <div className="main_transaction_row flex_row">
                            <div className="main_row">
                                <p>Oct 28, 21</p>
                            </div>
                            <div className="main_row">
                                <p>pending</p>
                            </div>
                            <div className="main_row">
                                <p>#bfjf9934nfni4</p>
                            </div>
                            <div className="main_row">
                                <p>Logos</p>
                            </div>
                        </div>
                        <div className="second_transaction_row flex_row">
                            <div className="main_row green_font">
                                <p>$400</p>
                            </div>
                            <div className="main_row green_font">
                                <p>$18.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="table_body_row flex_row">
                        <div className="main_transaction_row flex_row">
                            <div className="main_row">
                                <p>Oct 28, 21</p>
                            </div>
                            <div className="main_row">
                                <p>pending</p>
                            </div>
                            <div className="main_row">
                                <p>#bfjf9934nfni4</p>
                            </div>
                            <div className="main_row">
                                <p>Logos</p>
                            </div>
                        </div>
                        <div className="second_transaction_row flex_row">
                            <div className="main_row green_font">
                                <p>$400</p>
                            </div>
                            <div className="main_row green_font">
                                <p>$18.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="transaction_button flex_row">
                <p>Show More</p>
            </div>
        </div>
    </div>
  )
}

export default AddFund;