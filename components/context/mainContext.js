import React, { createContext, useState, useEffect } from 'react';

export const MainContext = createContext();
const MainContextProvider = (props) => {

  const sideControl = {
    profile: true,
    wallet: false,
    transaction: false,
    settings: false,
    track: false,
    package: false,
    referral: false
  };

  const statusControl = {
    overview: true,
    details: false,
    preview: false,
    amount: false
  };

  const statusCheck = {
    overview: false,
    details: false,
    preview: false,
    amount: false
  };

  const subscriptionPop = {
    default: true,
    mainPop: false,
    cancelPop: false
  }

  const [subscriptionPopState, setSubscriptionPopState] = useState(subscriptionPop);
  const [menu, setMenu] = useState(false);
  const [sideState, setSideState] = useState(sideControl);
  const [statusState, setStatusState] = useState(statusControl);
  const [statusStateCheck, setStatusStateCheck] = useState(statusCheck);

  return (
    <MainContext.Provider value={{
      sideState, 
    setSideState,
    statusState, 
    setStatusState,
    statusStateCheck, 
    setStatusStateCheck,
    subscriptionPopState, 
    setSubscriptionPopState,
    menu, 
    setMenu
    }}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider