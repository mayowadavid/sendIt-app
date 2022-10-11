import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'

const Preview = () => {
    const {statusState, setStatusState} = useContext(MainContext);
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
                            <p>David</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Phone Number</p>
                            <p>08130614615</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Email</p>
                            <p>david@gmail.com</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Gender</p>
                            <p>Male</p>
                        </div>
                    </div>
                    <div className="shipper_preview_row">
                        <div className="shipper_prev_title">
                            <p>Receiver Info</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Name</p>
                            <p>Jennifer</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Phone Number</p>
                            <p>09078563454</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Email</p>
                            <p>sam@gmail.com</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Gender</p>
                            <p>Female</p>
                        </div>
                    </div>
                    <div className="shipper_preview_row">
                        <div className="shipper_prev_title">
                            <p>Package</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>worth</p>
                            <p>100,000</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Quantity</p>
                            <p>10</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Weight</p>
                            <p>100kg</p>
                        </div>
                        <div className="sender_prev_row xl10 flex_row">
                            <p>Service Fee</p>
                            <p>$1000</p>
                        </div>
                    </div>
                    <div className="shipper_preview_description">
                        <p>Description</p>
                        <p className="xl9">4 brown carton, 2 smart Television,  One Home 
                            Theatre, one electric iron.</p>
                    </div>
                    <div className="shipper_gallery">
                        <div className="shipper_display_img">
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
                { statusState.preview == true && <p onClick={handleStatus}>Continue</p>}
                { statusState.preview == false && <p onClick={handleStatus}>Back</p>}
                </div>
            </>
  )
}

export default Preview