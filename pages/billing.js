import React, { useContext } from 'react'
import Billing from '../components/clients/billing'
import CancelSubscriptionPlan from '../components/clients/cancelSubscriptionPlan';
import SubscriptionPlan from '../components/clients/subscriptionPlan';
import { MainContext } from '../components/context/mainContext'
import TopFund from '../components/modal.js/TopFund';
import WithdrawModal from '../components/modal.js/WithdrawModal';

const Billings = () => {
  const {subscriptionPopState} = useContext(MainContext);
  return (
    <>  
      {subscriptionPopState.deposit &&<TopFund />}
        {subscriptionPopState.withdraw &&<WithdrawModal />}
        {(subscriptionPopState.cancelPop == true && <CancelSubscriptionPlan />)}
        {(subscriptionPopState.mainPop == true) &&<SubscriptionPlan />}
        {subscriptionPopState.default &&<Billing />}
    </>
    
  )
}

export default Billings;