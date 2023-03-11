import React, { useContext, useState, useEffect } from 'react';
import { MainContext } from '../context/mainContext';
import { formValidation } from '../functions/function';

const Sender = () => {
    const { 
        setStatusState, 
        statusStateCheck, 
        setStatusStateCheck, 
        setSideState,
        createPackage,
        currentPackage,
        userData,
        senderData, 
        setSenderData,
        formError, 
        setFormError,
        loading, 
        setLoading
     } = useContext(MainContext);
    

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

        //package data
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
        destination,
        setErr
        };
        setLoading(!loading);
        const {data, error} = await createPackage({
            variables: {
                packageData,
            }
        });
        data || error !== undefined && setLoading(!loading);
        //data !== undefined && setStatusState({details: true});
        //data !== undefined && setStatusStateCheck({...statusStateCheck, overview: true});
        data !== undefined && console.log(data);
        error!== undefined && console.log(error.message)
    };

    const update = (e) => {
        e.preventDefault();
        const {errors} = formValidation(senderData, setFormError);
        console.log(errors);
        //Object.keys(errors).length > 0 && 
        // setStatusState({details: true});
        // setStatusStateCheck({...statusStateCheck, overview: true});
    };
    console.log(formError?.senderName !== undefined ? "yay men": '');

  return (
        <>
            <div className="shipper_details l10 lpad5">
                <div className="shipper_row mpad5">
                    <div className="shipper_header">
                        <p>Senders Info</p>
                    </div>
                    <div className="shipper_body l10 sm10 flex_row">
                        <div className={`shipper_input_row sm10 ${formError?.senderName !== undefined ? 'error' : ''}`}>
                            <p>Name</p>
                            <input type="text" name="senderName" onChange={handleChange} value={senderData?.senderName} placeholder="Name" />
                        </div>
                        <div className={`shipper_input_row sm10 ${formError?.senderPhoneNumber !== undefined ? 'error' : ''}`}>
                            <p>Phone Number</p>
                            <input type="text" name="senderPhoneNumber" onChange={handleChange} value={senderData?.senderPhoneNumber} placeholder="Phone Number" />
                        </div>
                        <div className={`shipper_input_row sm10 ${formError?.senderEmail !== undefined ? 'error' : ''}`}>
                            <p>Email address</p>
                            <input type="text" name="senderEmail" onChange={handleChange} value={senderData?.senderEmail} placeholder="Email Address" />
                        </div>
                        <div className={`shipper_input_row sm10 ${formError?.senderGender !== undefined ? 'error' : ''}`}>
                            <p>Gender</p>
                            <input type="text" name="senderGender" onChange={handleChange} value={senderData?.senderGender} placeholder="Gender" />
                        </div>
                        <div className={`shipper_input_row sm10 ${formError?.pickUp !== undefined ? 'error' : ''}`}>
                            <p>Pick up</p>
                            <input type="text" name="pickUp" onChange={handleChange} value={senderData?.pickUp} placeholder="pick up country" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="shipper_details l10 lpad5">
                <div className="shipper_row mpad5">
                    <div className="shipper_header">
                        <p>Receiver Info</p>
                    </div>
                    <div className='shipper_body l10 sm10 flex_row'>
                        <div className={`shipper_input_row sm10 ${formError?.receiverName !== undefined ? 'error' : ''}`}>
                            <p>Name</p>
                            <input type="text" name="receiverName" onChange={handleChange} value={senderData?.receiverName} placeholder="Name" />
                        </div>
                        <div className={`shipper_input_row sm10 ${formError?.receiverAddress !== undefined ? 'error' : ''}`}>
                            <p>Address</p>
                            <input type="text" name="receiverAddress" onChange={handleChange} value={senderData?.receiverAddress} placeholder="Address" />
                        </div>
                        <div className={`shipper_input_row sm10 ${formError?.receiverPhoneNumber !== undefined ? 'error' : ''}`}>
                            <p>Phone Number</p>
                            <input type="text" name="receiverPhoneNumber" onChange={handleChange} value={senderData?.receiverPhoneNumber} placeholder="Phone Number" />
                        </div>
                        <div className={`shipper_input_row sm10 ${formError?.receiverEmail !== undefined ? 'error' : ''}`}>
                            <p>Email address</p>
                            <input type="text" name="receiverEmail" onChange={handleChange} value={senderData?.receiverEmail} placeholder="Email Address" />
                        </div>
                        <div className={`shipper_input_row sm10 ${formError?.receiverGender !== undefined ? 'error' : ''}`}>
                            <p>Gender</p>
                            <input type="text" name="receiverGender" onChange={handleChange} value={senderData?.receiverGender} placeholder="Gender" />
                        </div>
                        <div className={`shipper_input_row sm10 ${formError?.destination !== undefined ? 'error' : ''}`}>
                            <p>Destination</p>
                            <input type="text" name="destination" onChange={handleChange} value={senderData?.destination} placeholder="Destination" />
                        </div>
                    </div>
                </div>
            </div>
            {Object.keys(formError).length > 0 && <p className='error'>all field is required</p>}
            <div className="shipper_button l9 flex_row">
                {senderData?.id == undefined && 
                <button className={ loading == true ? 'loading' : '' } onClick={submit}>
                    {loading == true && <img className='load' src="/svg/loading.svg" alt="sendit" />}
                    {loading == false && `Continue`}
                </button>}
                {senderData?.id !== undefined && <button onClick={update}>
                {loading == true && <img className='load' src="/svg/loading.svg" alt="sendit" />}
                {loading == false && `Save & Continue`}
                </button>}
            </div>
        </>
  )
}

export default Sender