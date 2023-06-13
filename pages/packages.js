import React, { useContext, useEffect } from "react";
import Package from "../components/clients/package";
import Preview from "../components/clients/preview";
import Sender from "../components/clients/sender";
import { MainContext } from "../components/context/mainContext";
import PackageStatus from "../components/general/packageStatus";
import GeneralPopup from "../components/modal.js/general-pop";
import ClientLayout from "../components/general/clientLayout";

const Packages = () => {
  const { statusState, setStatusState, router, createPackage, modalControl } =
    useContext(MainContext);

  return (
    <ClientLayout>
      {modalControl == true && <GeneralPopup />}
      <PackageStatus />
      {statusState.overview == true && <Sender />}
      {statusState.details == true && <Package />}
      {statusState.preview == true && <Preview />}
    </ClientLayout>
  );
};

export default Packages;
