import Sidebar from "./sidebar";
import Header from "./header";
import { useContext, useEffect } from "react";
import { authentication } from "../functions/function";
import { MainContext } from "../context/mainContext";
const ClientLayout = (props) => {
  const { router } = useContext(MainContext);
  useEffect(()=>{
    authentication(router);
  }, [])
    return (
        <div className="body_layout flex_row">
        <Sidebar />
        <div className="right_wrap xl10">
          <Header />
          <div className="inner_space xl-pad5">
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default ClientLayout;