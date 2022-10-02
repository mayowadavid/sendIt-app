import React from 'react'

const Package = () => {
  return (
            <>
                <div className="shipper_details l10 lpad5">
                    <div className="shipper_row mpad5">
                        <div className="shipper_header">
                            <p>Packade  Details</p>
                        </div>
                        <div className="shipper_body l10 sm10 flex_row">
                            <div className="shipper_input_row sm10">
                                <p>Name</p>
                                <input type="text" name="" id="" placeholder="Name" />
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>Quantity</p>
                                <input type="text" name="" id="" placeholder="quantity" />
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>weight</p>
                                <input type="text" name="" id="" placeholder="weight" />
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>Worth</p>
                                <input type="text" name="" id="" placeholder="worth" />
                            </div>
                            <div className="shipper_input_description">
                                <p>Description</p>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="shipperGallery">
                                <p>Images</p>
                                <div className="shipGaller_wrap flex_column">
                                    <img src="svg/gallery.svg" alt=""/>
                                    <p>Drag Image Here or browse</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shipper_button flex_row">
                    <p>Continue</p>
                </div>
            </>
  )
}

export default Package