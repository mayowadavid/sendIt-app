import React, { useContext, useState } from 'react'
import { MainContext } from '../context/mainContext';
import CodeModal from './CodeModal';
import ShareModal from './ShareModal';
import TopFund from './TopFund';
import UpdateModal from './UpdateModal';
import WalletModal from './WalletModal';
import WithdrawModal from './WithdrawModal';

const GeneralPopup = () => {

  const modalState = ["Update", "Share", "Wallet", "Code", "Withdraw", "Top-up"];
  const { 
    modalIndex, 
    modalControl, 
    setModalControl } = useContext(MainContext);

  return (
    <div className='wallet_body_pop_col flex_row'>
      <div className="social_pop">
              <div className="wallet_body_header flex_row">
                  <div className="wallet_pop_title">
                      <p>{modalState[modalIndex]}</p>
                  </div>
                  <div className="wallet_pop_cancel flex_row">
                      <img onClick={()=> setModalControl(!modalControl)} src="svg/cross.svg" alt="sendit" />
                  </div>
              </div>
             { modalState[modalIndex] === "Update" && <UpdateModal /> }

             { modalState[modalIndex] == "Code" && <CodeModal /> }

              { modalState[modalIndex] == "Wallet" && <WalletModal /> }

              { modalState[modalIndex] == "Share" && <ShareModal /> }

              { modalState[modalIndex] == "Top-up" && <TopFund /> }

              { modalState[modalIndex] == "Withdraw" && <WithdrawModal /> }
      </div>
      <div onClick={()=> setModalControl(!modalControl)} className="wallet_pop"></div>
    </div>
  )
}

export default GeneralPopup