import React, { useContext, useEffect } from 'react'
import Package from '../components/clients/package'
import Preview from '../components/clients/preview'
import Sender from '../components/clients/sender'
import { MainContext } from '../components/context/mainContext'
import { authentication } from '../components/functions/function'
import Header from '../components/general/header'
import PackageStatus from '../components/general/packageStatus'
import Sidebar from '../components/general/sidebar'
import GeneralPopup from '../components/modal.js/general-pop'

const Packages = () => {

  const {statusState, 
    setStatusState, 
    router,
    createPackage,
    modalControl
  } = useContext(MainContext);

  useEffect(()=>{
    // user authentication
    authentication(router);
  }, []);

  return (
    <div className="body_layout flex_row">
    { modalControl == true && <GeneralPopup /> }
    <Sidebar />
    <div className="right_wrap xl10">
          <Header />
          <PackageStatus />
          {statusState.overview == true && <Sender />}
          {statusState.details == true && <Package />}
          {statusState.preview == true && <Preview />}
    </div>
    </div>
  )
}

export default Packages;