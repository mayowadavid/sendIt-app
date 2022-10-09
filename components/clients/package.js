import React, { useContext, useEffect } from 'react'
import { MainContext } from '../context/mainContext'
import Image from 'next/image'

const Package = () => {
    const {statusState, setSideState, setStatusState, statusStateCheck, setStatusStateCheck } = useContext(MainContext);

    useEffect(()=> {
        setSideState({
            track: true
        });
    }, []);

    const handleStatus = (e)=> {
        e.preventDefault();
        setStatusState({preview: true});
        setStatusStateCheck({...statusStateCheck, details: true});
    }
  return (
            <>
                <div className="shipper_details l10 lpad5">
                    <div className="shipper_row mpad5">
                        <div className="shipper_header">
                            <p>Packade  Details</p>
                        </div>
                        <div className="shipper_body l10 sm10 flex_row">
                            <div className="shipper_input_row sm10">
                                <p>Worth</p>
                                <input type="text" name="" id="" placeholder="Name" />
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>Quantity</p>
                                <input type="text" name="" id="" placeholder="quantity" />
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>Choose Scale Options</p>
                                <select>
                                    <option>Weight</option>
                                    <option>per square metre</option>
                                </select>
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>Service fee</p>
                                <input type="text" name="" disabled={true} placeholder="worth" />
                            </div>
                            <div className="shipper_input_description">
                                <p>Description</p>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="shipperGallery">
                                <p>Images</p>
                                <div className="shipGaller_wrap flex_column">
                                    <Image alt="sendit" src="svg/gallery.svg" />
                                    <p>Drag Image Here or browse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shipper_button flex_row">
                    { statusState.details == true && <p onClick={handleStatus}>Continue</p>}
                    { statusState.details == false && <p onClick={handleStatus}>Back</p>}
                </div>
            </>
  )
}

export default Package