import Sidebar from "./sidebar";
import Header from "./header";
const ClientLayout = (props) => {
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