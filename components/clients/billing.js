import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/mainContext";
import { BillingForm } from "./billingForm";
import Wallet from "./wallet";
import ClientLayout from "../general/clientLayout";

const Billing = () => {
  const { setSideState, subscriptionPopState, setSubscriptionPopState } =
    useContext(MainContext);
  const tabState = {
    billing: true,
    wallet: false,
  };
  const [controlTab, setControlTab] = useState(tabState);

  useEffect(() => {
    setSideState({
      billing: true,
    });
  }, []);

  const handleTab = (prop) => {
    setControlTab({ [prop]: !controlTab[prop] });
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    setSubscriptionPopState({
      ...subscriptionPopState,
      mainPop: !subscriptionPopState.mainPop,
    });
  };

  return (
    <ClientLayout>
      <div className="settings_header">
        <p>Bill Settings</p>
      </div>
      <div className="subscription_wrap  l10">
        <div className="subscription_header flex_row">
          <div
            onClick={() => handleTab("billing")}
            className={`subscription_header_col ${
              controlTab.billing ? "active_sub" : ""
            }`}
          >
            <p>Billing info</p>
          </div>
          <div
            onClick={() => handleTab("wallet")}
            className={`subscription_header_col ${
              controlTab.wallet ? "active_sub" : ""
            }`}
          >
            <p>Wallet</p>
          </div>
          <div onClick={handleSubscription} className="subscription_header_col">
            <p>My subscription plan</p>
          </div>
        </div>
        {controlTab.billing && <BillingForm />}
        {controlTab.wallet && <Wallet />}
      </div>
    </ClientLayout>
  );
};

export default Billing;
