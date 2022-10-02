import { useContext, useEffect } from "react"
import Header from '../general/header'
import Sidebar from '../general/sidebar'
import { MainContext } from "../context/mainContext";

const Transaction = () => {

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
                <div className="transaction_track xl-mg-tp10 sm-mg-tp10 flex_row">
                    <div className="track_input">
                        <input type="text" />
                    </div>
                    <div className="track_button sm3 flex_row">
                        <p>Track</p>
                    </div>
                </div>
                <div className="transaction_history">
                    <div className="transaction_header">
                        <p>Delivery History</p>
                    </div>
                    <div className="transaction_table">
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
        </div>
    </div>
  )
}

export default Transaction