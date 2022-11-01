import React, { useContext } from 'react'
import Transaction from '../components/clients/transaction'
import { MainContext } from '../components/context/mainContext';
import GeneralPopup from '../components/modal.js/general-pop';

const Transactions = () => {
  const { modalControl } = useContext(MainContext);
  return (
    <>
        { modalControl == true && <GeneralPopup /> }
        <Transaction />
    </>
  )
}

export default Transactions;