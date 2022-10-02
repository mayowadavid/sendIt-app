import React from 'react'
import Header from '../general/header'
import Sidebar from '../general/sidebar'

const Wallet = () => {
  return (
    <div className="body_layout flex_row">
    <Sidebar />
    <div className="right_wrap xl10">
        <Header />
        <div className="inner_space xl-pad5">
            <div className="main_title">
                <p>Wallet</p>
            </div>
            <div className="wallet_wrap x10 l10 flex_row">
                <div className="wallet_row l5 l-mg-tp5 sm10 flex_column">
                    <p>wallet amount</p>
                    <p>$1124.99</p>
                </div>
                <div className="wallet_row l5 l-mg-tp5 sm10 flex_column">
                    <p>withdrawn</p>
                    <p>$1000.99</p>
                </div>
                <div className="wallet_row l5 l-mg-tp5 sm10 flex_column">
                    <p>Used for purchase</p>
                    <p>$14</p>
                </div>
                <div className="wallet_row l5 l-mg-tp5 sm10 flex_column">
                    <p>Pending</p>
                    <p>$44.99</p>
                </div>
                <div className="wallet_row l5 l-mg-tp5 sm10 flex_column">
                    <p>Available for withdrawal</p>
                    <p>$124.99</p>
                </div>
            </div>
            <div className="wallet_action x10 l10 flex_row">
                <div className="deposit actions">
                    <p>Deposit</p>
                </div>
                <div className="withdraw actions">
                    <p>withdraw</p>
                </div>
            </div>
            <div className="wallet_history l10">
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
    </div>
</div>
  )
}

export default Wallet