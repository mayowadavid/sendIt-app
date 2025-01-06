import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'

const Preview = () => {
    const {statusState, 
        setStatusState,
        loading,
        setLoading,
        senderData,
    } = useContext(MainContext);
    const handleStatus = (e)=> {
        e.preventDefault();
        setStatusState({...statusState, preview: true});
    }
  return (
            <>
                <div className="shipper_preview xl-pad5">
                    <div className="shipper_preview_row">
                        <div className="shipper_prev_title">
                            <p>Senders Info</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Name</p>
                            <p>{senderData?.senderName}</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Phone Number</p>
                            <p>{senderData?.senderPhoneNumber}</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Email</p>
                            <p>{senderData?.senderEmail}</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Gender</p>
                            <p>{senderData?.senderGender}</p>
                        </div>
                    </div>
                    <div className="shipper_preview_row">
                        <div className="shipper_prev_title">
                            <p>Receiver Info</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Name</p>
                            <p>{senderData?.receiverName}</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Phone Number</p>
                            <p>{senderData?.receiverPhoneNumber}</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Email</p>
                            <p>{senderData?.receiverEmail}</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Gender</p>
                            <p>{senderData?.receiverGender}</p>
                        </div>
                    </div>
                    <div className="shipper_preview_row">
                        <div className="shipper_prev_title">
                            <p>Package</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>worth</p>
                            <p>{senderData?.worth}</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Quantity</p>
                            <p>{senderData?.quantity}</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Scale</p>
                            <p>{senderData?.measurement}</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Service Fee</p>
                            <p>{senderData?.serviceFee}</p>
                        </div>
                    </div>
                    <div className="shipper_preview_description">
                        <p>Description</p>
                        <p className="xl9">{senderData?.description}.</p>
                    </div>
                    <div className="shipper_gallery">
                        <div className="shipper_display_image mbw5 l8 m10">
                            <img  alt="sendit" className="xl10" src="img/clip.png" />
                        </div>
                        <div className="shipper_select_image_row xl10 flex_row">
                            <div className="shipper_select_con">
                                <img  alt="sendit" src="img/clip.png" />
                            </div>
                            <div className="shipper_select_con">
                                <img  alt="sendit" src="img/category3.png" />
                            </div>
                            <div className="shipper_select_con">
                                <img  alt="sendit" src="img/category5.png" />
                            </div>
                            <div className="shipper_select_con">
                                <img  alt="sendit" src="img/category2.png" />
                            </div>
                            <div className="shipper_select_con">
                                <img  alt="sendit" src="img/category2.png" />
                            </div>
                            <div className="shipper_select_con">
                                <img  alt="sendit" src="img/category2.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shipper_button l9 flex_row">
                { statusState.preview == true && <button onClick={handleStatus}>Continue</button>}
                { statusState.preview == false && <p onClick={handleStatus}>Back</p>}
                </div>
            </>
  )
}

export default Preview