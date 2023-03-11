import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/mainContext'

const Package = () => {
    const {
        statusState, 
        setSideState, 
        setStatusState, 
        statusStateCheck, 
        setStatusStateCheck,
        temporaryImage, 
        setTemporaryImage, 
        setErr,
        setModalIndex,
        setModalControl,
        setImgPreviewIndex,
        liveImage, 
        setLiveImage
    } = useContext(MainContext);

    const secondInitial = {
        worth: '',
        quantity: '',
        measurement: '',
        size: '',
        serviceFee: 30,
        description: ''
    };

    const [detail, setDetail] = useState(secondInitial);
    const [allImages, setAllImages] = useState([]);

    useEffect(()=> {
        setSideState({
            track: true
        });
    }, []);

    // handle form change
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setDetail({...detail, [name]: value});
    }

    // handle file change
    const handleFile = (e) => {
        e.preventDefault();
        const {name, files} = e.target;
        let types = ['image/jpeg', 'image/png'];
        if(files){
            let allFile = [...files];
            let FileSize = "5000000";
            let result = allFile.filter((f)=>{
                return types.some((s)=>{
                   return (f.type == s) && (f.size <= FileSize );
                })
            });
           result.length <= 0 && setErr("unsupported image type* accepted image jpg/png or file size is greater than 5mb");
           const temporaryUrl = result.length > 0 && result.map((f)=>{
                let url = URL.createObjectURL(f);
                return url;
           }); 
           result.length > 0 && setAllImages(result);
           temporaryUrl.length > 0 && setTemporaryImage(temporaryUrl);
        }
    }

    // handle image drop and upload
    const handleImage = (e, i) => {
        e.preventDefault();
        setModalIndex(6);
        setImgPreviewIndex(i);
        setModalControl(true);
    }

    const submit = (e) => {
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
                                <input type="text" onChange={handleChange} value={detail?.worth} name="worth" id="" placeholder="Worth" />
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>Quantity</p>
                                <input type="text" onChange={handleChange} value={detail?.quantity} name="quantity" id="" placeholder="quantity" />
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>Choose Scale Options</p>
                                <select onChange={handleChange} name='measurement'>
                                    <option>Weight</option>
                                    <option>per square metre</option>
                                </select>
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>Service fee</p>
                                <input type="text" onChange={handleChange} name="serviceFee" value={detail?.serviceFee} disabled={true} placeholder="fee" />
                            </div>
                            <div className="shipper_input_row sm10">
                                <p>Service fee</p>
                                <input type="text" onChange={handleChange} name="size" value={detail?.size} placeholder="size" />
                            </div>
                            <div className="shipper_input_description">
                                <p>Description</p>
                                <textarea onChange={handleChange} name="description" value={detail?.description} id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="shipperGallery">
                                <p>Images</p>
                                <div className="shipGaller_wrap">
                                <input type="file" id="dropFile" onChange={handleFile} multiple/>
                                <label htmlFor="dropFile" className='drop_label flex_column'>
                                    <img  alt="sendit" src="svg/gallery.svg" />
                                    <p>Drop your image here or browse</p>
                                    <p>Support: JPG, PNG</p>
                                </label>
                                </div>
                            </div>
                                <div className='showcaseImage flex_row'>
                                    {(temporaryImage.length > 0 || liveImage.length > 0) &&
                                    (liveImage.length > 0 ? liveImage : temporaryImage)
                                    .map((url, i)=>{
                                        return (
                                            <div onClick={(e)=>handleImage(e, i)} key={i} className="image_row">
                                                <img src={url}  alt="sendit" />
                                            </div>
                                            );
                                        })}
                                </div>
                        </div>
                    </div>
                </div>
                <div className="shipper_button l9 flex_row">
                    { statusState.details == true && <p onClick={submit}>Continue</p>}
                </div>
            </>
  )
}

export default Package