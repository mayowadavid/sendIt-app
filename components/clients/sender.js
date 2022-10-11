import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'

const Sender = () => {
    const { setStatusState, statusStateCheck, setStatusStateCheck } = useContext(MainContext);
    const handleStatus = (e)=> {
        e.preventDefault();
        setStatusState({details: true});
        setStatusStateCheck({...statusStateCheck, overview: true});
    }


  return (
        <>
            <div className="shipper_details l10 lpad5">
                <div className="shipper_row mpad5">
                    <div className="shipper_header">
                        <p>Senders Info</p>
                    </div>
                    <div className="shipper_body l10 sm10 flex_row">
                        <div className="shipper_input_row sm10">
                            <p>Name</p>
                            <input type="text" name="" id="" placeholder="Name" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Phone Number</p>
                            <input type="text" name="" id="" placeholder="Phone Number" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Email address</p>
                            <input type="text" name="" id="" placeholder="Email Address" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Gender</p>
                            <input type="text" name="" id="" placeholder="Gender" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="shipper_details l10 lpad5">
                <div className="shipper_row mpad5">
                    <div className="shipper_header">
                        <p>Receiver Info</p>
                    </div>
                    <div className="shipper_body l10 sm10 flex_row">
                        <div className="shipper_input_row sm10">
                            <p>Name</p>
                            <input type="text" name="" id="" placeholder="Name" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Address</p>
                            <input type="text" name="" id="" placeholder="Address" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Phone Number</p>
                            <input type="text" name="" id="" placeholder="Phone Number" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Email address</p>
                            <input type="text" name="" id="" placeholder="Email Address" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Gender</p>
                            <input type="text" name="" id="" placeholder="Gender" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="shipper_button l9 flex_row">
                <p onClick={handleStatus}>Continue</p>
            </div>
        </>
  )
}

export default Sender