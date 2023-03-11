import ModalLayout from './modalLayout'

const TopFund = () => {
  return (
    <ModalLayout name="deposit" headerName="Top-up Funds">
                <div className="wallet_body_layout">
                    <div className="wallet_row_input">
                        <p>Balance to top-up</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="wallet_row_input">
                        <p>Amount to top-up</p>
                        <input type="text" name="" id="" />
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
                        <input type="text" name="" id="" />
                    </div>
                    <div className="wallet_row_confirm flex_row">
                        <input type="checkbox" name="" id="" />
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
    </ModalLayout>
  )
}

export default TopFund