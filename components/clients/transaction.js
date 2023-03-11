import { useContext, useEffect, useState } from "react"
import Header from '../general/header'
import Sidebar from '../general/sidebar'
import { MainContext } from "../context/mainContext";

const Transaction = () => {

    const { 
        setSideState, 
        modalControl, 
        setModalControl,
        modalIndex, 
        setModalIndex
     } = useContext(MainContext);
    const [ openAction, setOpenAction ]  = useState({
            share: false,
            update: false,
            view: false
        });

    const [transactionData, setTransactionData] = useState([
        {id: "#bfhhhh15244", date: "Oct 28, 21", status: "pending", location: "Lagos",
        fees: "$400", amount: "$18.00" },
        {id: "#bfhhhh15244", date: "Oct 28, 21", status: "pending", location: "Lagos",
        fees: "$400", amount: "$18.00" },
        {id: "#bfhhhh15244", date: "Oct 28, 21", status: "pending", location: "Lagos",
        fees: "$400", amount: "$18.00" },
        {id: "#bfhhhh15244", date: "Oct 28, 21", status: "approved", location: "Lagos",
        fees: "$400", amount: "$18.00" },
        {id: "#bfhhhh15244", date: "Oct 28, 21", status: "cancelled", location: "Lagos",
        fees: "$400", amount: "$18.00" },
        {id: "#bfhhhh15244", date: "Oct 28, 21", status: "delivered", location: "Lagos",
        fees: "$400", amount: "$18.00" },
        {id: "#bfhhhh15244", date: "Oct 28, 21", status: "delivered", location: "Lagos",
        fees: "$600", amount: "$28.00" }
    ]);
    useEffect(()=> {
        setSideState({
            transactions: true
        });
    }, []);

    const shareTransaction = (e) => {
        e.preventDefault();
        setOpenAction({
            share: true
        });
        setModalIndex(1);
        setModalControl(!modalControl);
    }

    const updateTransaction = (e) => {
        e.preventDefault();
        setOpenAction({
            update: true
        });
        setModalIndex(0);
        setModalControl(!modalControl);
    }

    const previewTransaction = (e) => {
        e.preventDefault();
        setOpenAction({
            preview: true
        });
    }

  return (
    <div className="body_layout flex_row">
        <Sidebar />
        <div className="right_wrap xl10">
            <Header />
            <div className="inner_space xl-pad5">
                <div className="transaction_track xl-mg-tp10 sm-mg-tp10 flex_row">
                    <div className="track_input">
                        <input type="text" />
                    </div>
                    <div className="track_button sm3 flex_row">
                        <p>Track</p>
                    </div>
                </div>
                <div className="transaction_history">
                    <div className="transaction_header">
                        <p>Delivery History</p>
                    </div>
                    <div className="transaction_table">
                        <div className="transaction_table_header flex_row">
                            <div className="main_transaction_row flex_row">
                                <div className="main_row flex_row">
                                    <p>Date</p>
                                </div>
                                <div className="main_row flex_row">
                                    <p>Status</p>
                                </div>
                                <div className="main_row flex_row">
                                    <p>Transaction id</p>
                                </div>
                                <div className="main_row flex_row">
                                    <p>Location</p>
                                </div>
                            </div>
                            <div className="second_transaction_row flex_row">
                                <div className="main_row flex_row">
                                    <p>Fees</p>
                                </div>
                                <div className="main_row flex_row">
                                    <p>Amount</p>
                                </div>
                                <div className="main_row update flex_row">
                                    <p>Details</p>
                                </div>
                            </div>
                        </div>
                        <div className="transaction_table_body flex_column">
                        {transactionData.map((t, i)=> {
                            const { id, date, status, location, amount, fees } = t;
                            return (
                                        <div key={i} className="table_body_row flex_row">
                                            <div className="main_transaction_row flex_row">
                                                <div className="main_row flex_row">
                                                    <p>{date}</p>
                                                </div>
                                                <div className="main_row flex_row">
                                                    <p>{status}</p>
                                                </div>
                                                <div className="main_row flex_row">
                                                    <p>{id}</p>
                                                </div>
                                                <div className="main_row flex_row">
                                                    <p>{location}</p>
                                                </div>
                                            </div>
                                            <div className="second_transaction_row flex_row">
                                                <div className="main_row flex_row green_font">
                                                    <p>{amount}</p>
                                                </div>
                                                <div className="main_row flex_row green_font">
                                                    <p>{fees}</p>
                                                </div>
                                                <div onClick={updateTransaction} className="main_row update_row second_row flex_row">
                                                    <div className="button_pop_content">
                                                        <p>Update</p>
                                                    </div>
                                                    <img src="/svg/update.svg" alt="sendit" />
                                                </div>
                                                <div onClick={shareTransaction} className="main_row second_row flex_row">
                                                    <div className="button_pop_content">
                                                        <p>Share</p>
                                                    </div>
                                                    <img src="/svg/share.svg" alt="sendit" />
                                                </div>
                                                <div onClick={previewTransaction} className="main_row second_row flex_row">
                                                    <div className="button_pop_content">
                                                        <p>preview</p>
                                                    </div>
                                                    <img src="/svg/eye.svg" alt="sendit" />
                                                </div>
                                            </div>
                                        </div>
                                );
                             })}
                        </div>
                    </div>
                    <div className="transaction_button flex_row">
                        <p>Show More</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Transaction