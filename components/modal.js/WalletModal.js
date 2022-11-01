import React from 'react'

const WalletModal = () => {
  return (
    <div className="wallet_body_layout">
                <div className="withdraw_body_container flex_column xl-h3">
                    <p className="m10">Withdraw to a saved recipient</p>
                    <p className="m10">Choose from one of your saved recipients to make a withdrawal</p>
                </div>
                <div className="withdraw_body_container flex_column xl-h3">
                    <p className="m10">Withdraw to another account</p>
                    <p className="m10">Enter details of an account you haven’t saved previously to
                        make a withdrawal to</p>
                </div>
            </div>
  )
}

export default WalletModal