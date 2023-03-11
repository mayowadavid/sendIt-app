import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'

const ImagePreview = () => {
    const {temporaryImage, 
      imgPreviewIndex, 
      setImgPreviewIndex
    } = useContext(MainContext);

    // increase image index
    // image preview increment
    const increaseIndex = (e) => {
      e.preventDefault();
      if(imgPreviewIndex == (temporaryImage.length - 1)){
        setImgPreviewIndex(0);
      }else {
        setImgPreviewIndex(imgPreviewIndex + 1);
      }
    }

    // image preview decrement
    const decreaseIndex = (e) => {
      e.preventDefault();
      if(imgPreviewIndex !== 0){
        setImgPreviewIndex(imgPreviewIndex - 1);
      }else {
        console.log(temporaryImage.length, "30")
        setImgPreviewIndex(temporaryImage.length - 1);
      }
    }

  return (
    <div className='imagePreview'>
        <div className='arrowContainer flex_row'>
          <div className='arrows flex_row'>
              <img onClick={decreaseIndex} src='/img/arrow_left.png' alt="sendit"/>
          </div>
          <div className='arrows flex_row'>
                <img onClick={increaseIndex} src='/img/arrow_right.png' alt="sendit"/>
          </div>
        </div>
        <img src={temporaryImage[imgPreviewIndex]} alt="sendit"/>
    </div>
  )
}

export default ImagePreview