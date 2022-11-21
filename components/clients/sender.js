import React, { useContext, useState, useEffect } from 'react';
import { MainContext } from '../context/mainContext';

const Sender = () => {
    const { setStatusState, 
        statusStateCheck, 
        setStatusStateCheck, 
        setSideState,
        createPackage,
        currentPackage,
        userData } = useContext(MainContext);
    const initialState = {
        senderName: '',
        senderPhoneNumber: '',
        senderEmail: '',
        senderGender: '',
        receiverName: '',
        receiverAddress: '',
        receiverPhoneNumber: '',
        receiverEmail: '',
        receiverGender: '',
        pickUp: '',
        destination: ''
    }
    const [senderData, setSenderData] = useState(initialState);

    useEffect(()=> {
        setSideState({
            package: true
        });
        userData?.id !== undefined && currentPackage();
    }, []);


    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setSenderData({...senderData, [name]: value});
    }

    const submit = async (e) => {
        e.preventDefault();
        const {senderName,
        senderPhoneNumber,
        senderEmail,
        senderGender,
        receiverName,
        receiverAddress,
        receiverPhoneNumber,
        receiverEmail,
        receiverGender,
        pickUp,
        destination} = senderData;
        const packageData = {
            senderName,
        senderPhoneNumber,
        senderEmail,
        senderGender,
        receiverName,
        receiverAddress,
        receiverPhoneNumber,
        receiverEmail,
        receiverGender,
        pickUp,
        destination
        };
        const {data, error} = await createPackage({
            variables: {
                packageData,
            }
        });
        //data !== undefined && setStatusState({details: true});
        //data !== undefined && setStatusStateCheck({...statusStateCheck, overview: true});
        data !== undefined && console.log(data);
        error!== undefined && console.log(error.message)
    }
    console.log(senderData);
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
                            <input type="text" name="senderName" onChange={handleChange} placeholder="Name" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Phone Number</p>
                            <input type="text" name="senderPhoneNumber" onChange={handleChange} placeholder="Phone Number" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Email address</p>
                            <input type="text" name="senderEmail" onChange={handleChange} placeholder="Email Address" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Gender</p>
                            <input type="text" name="senderGender" onChange={handleChange} placeholder="Gender" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Pick up</p>
                            <input type="text" name="pickUp" onChange={handleChange} placeholder="pick up country" />
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
                            <input type="text" name="receiverName" onChange={handleChange} placeholder="Name" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Address</p>
                            <input type="text" name="receiverAddress" onChange={handleChange} placeholder="Address" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Phone Number</p>
                            <input type="text" name="receiverPhoneNumber" onChange={handleChange} placeholder="Phone Number" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Email address</p>
                            <input type="text" name="receiverEmail" onChange={handleChange} placeholder="Email Address" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Gender</p>
                            <input type="text" name="receiverGender" onChange={handleChange} placeholder="Gender" />
                        </div>
                        <div className="shipper_input_row sm10">
                            <p>Destination</p>
                            <input type="text" name="destination" onChange={handleChange} placeholder="Destination" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="shipper_button l9 flex_row">
                <p onClick={submit}>Continue</p>
            </div>
        </>
  )
}

export default Sender