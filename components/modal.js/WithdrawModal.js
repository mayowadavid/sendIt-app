import React from 'react'
import ModalLayout from './modalLayout'

const WithdrawModal = () => {

  return (
    <ModalLayout name="withdraw" headerName="Withdraw To Another Account">
                <div className="wallet_body_layout">
                    <div className="wallet_row_input">
                        <p>Balance to withdraw from</p>
                        <select name="" id="">
                            <option value="">
                                Main Balance
                            </option>
                        </select>
                    </div>
                    <div className="wallet_row_input">
                        <p>Choose from Saved Recipient</p>
                        <select name="" id="">
                            <option value="">
                                Main Balance
                            </option>
                        </select>
                    </div>
                    <div className="wallet_row_input">
                        <p>Amount to withdraw</p>
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="wallet_row_input">
                        <p>Amount user will receive</p>
                        <input type="text" name="" id="" placeholder="$0.00" />
                    </div>
                    <div className="wallet_row_input">
                        <p>Bank Account Number</p>
                        <input type="text" name="" id="" placeholder="enter bank account number"/>
                    </div>
                    <div className="wallet_row_input">
                        <p>Select Bank</p>
                        <select name="" id="">
                            <option value="">
                                Select Bank To Transfer To
                            </option>
                        </select>
                    </div>
                    <div className="wallet_row_input">
                        <p>Description (optional)</p>
                        <input type="text" name="" id="" placeholder="description" />
                    </div>
                    <div className="wallet_row_confirm flex_row">
                        <input type="checkbox" name="" id=""/>
                        <p>I confirm to be debited $50 to send</p>
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
    </ModalLayout>
  )
}

export default WithdrawModal