import React from 'react'
import Image from 'next/image'

const AddFund = () => {
  return (
    <div className="wallet_body_pop flex_row">
        <div className="wallet_body_pop_col flex_column">
            <div className="wallet_body_container">
                <div className="wallet_body_header flex_row">
                    <div className="wallet_pop_title">
                        <p>Top-up Funds</p>
                    </div>
                    <div className="wallet_pop_cancel flex_row">
                        <Image src="svg/cross.svg" alt=""/>
                    </div>
                </div>
                <div className="wallet_body_layout">
                    <div className="wallet_row_input">
                        <p>Balance to top-up</p>
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="wallet_row_input">
                        <p>Amount to top-up</p>
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="wallet_row_input">
                        <p>Amount you will receive</p>
                        <select name="" id="">
                            <option value="">
                                Select Bank To Transfer to
                            </option>
                        </select>
                    </div>
                    <div className="wallet_row_input">
                        <p>Payment method</p>
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="wallet_row_confirm flex_row">
                        <input type="checkbox" name="" id=""/>
                        <p>I confirm to be credited $50 to send</p>
                    </div>
                </div>
                <div className="wallet_body_footer flex_row">
                    <div className="wallet_body_action">
                        <p>Cancel</p>
                    </div>
                    <div className="wallet_body_action">
                        <p>Continue</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="wallet_pop"></div>
        <div className="body_layout flex_row">
            <div className="side_bar_wrap flex_column">
                <div className="logo">
    
                </div>
                <div className="side_middle_wrap">
                    <div className="profile_icon icon_wrap">
                        <Image src="svg/profile.svg" alt=""/>
                    </div>
                    <div className="box_icon icon_wrap">
                        <Image src="svg/box.svg" alt=""/>
                    </div>
                    <div className="transaction_icon icon_wrap">
                        <Image src="svg/transaction.svg" alt=""/>
                    </div>
                    <div className="wallet_icon icon_wrap">
                        <Image src="svg/wallet.svg" alt=""/>
                    </div>
                </div>
                <div className="side_footer_wrap">
                    <div className="settings_icon icon_wrap">
                        <Image src="svg/setting.svg" alt=""/>
                    </div>
                    <div className="logOut_icon icon_wrap">
                        <Image src="svg/logout.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="right_wrap">
                <div className="header flex_row">
                    <div className="message_icon top_wrap">
                        <Image src="svg/chat.svg" alt=""/>
                    </div>
                    <div className="notifications_icon top_wrap">
                        <Image src="svg/notification.svg" alt=""/>
                    </div>
                    <div className="avatar_wrap flex_row">
                        <div className="avatar_icon">
                            <Image src="svg/avatar.svg" alt=""/>
                        </div>
                        <p>David</p>
                        <Image src="svg/drop-arrow.svg" alt=""/>
                    </div>
                </div>
                <div className="inner_space">
                    <div className="main_title">
                        <p>Wallet</p>
                    </div>
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
                    <div className="wallet_action flex_row">
                        <div className="deposit actions">
                            <p>Deposit</p>
                        </div>
                        <div className="withdraw actions">
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
            </div>
        </div>
    </div>
  )
}

export default AddFund;