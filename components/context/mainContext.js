import React, { createContext, useState, useEffect } from 'react';

export const MainContext = createContext();
const MainContextProvider = (props) => {

  const sideControl = {
    profile: true,
    wallet: false,
    transaction: false,
    settings: false,
    track: false,
    referral: false
  };

  const statusControl = {
    overview: true,
    details: false,
    preview: false,
    amount: false
  };

  const [sideState, setSideState] = useState(sideControl);
  const [statusState, setStatusState] = useState(statusControl);

  return (
    <MainContext.Provider value={{
      sideState, 
    setSideState,
    statusState, 
    setStatusState
    }}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider