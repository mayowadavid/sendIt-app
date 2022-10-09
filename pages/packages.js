import React, { useContext } from 'react'
import Package from '../components/clients/package'
import Preview from '../components/clients/preview'
import Sender from '../components/clients/sender'
import { MainContext } from '../components/context/mainContext'
import Header from '../components/general/header'
import PackageStatus from '../components/general/packageStatus'
import Sidebar from '../components/general/sidebar'

const Packages = () => {

  const {statusState, setStatusState} = useContext(MainContext);

  return (
    <div className="body_layout flex_row">
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