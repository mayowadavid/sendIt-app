import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'
import Image from 'next/image'

const PackageStatus = () => {
    const {statusState, setStatusState, statusStateCheck, setStatusStateCheck} = useContext(MainContext);

    const handleOverview = (e) => {
        e.preventDefault();
        setStatusState({overview: true});
        setStatusStateCheck({...statusStateCheck, overview: false});
    }

    const handleDetails = (e) => {
        e.preventDefault();
        setStatusState({details: true});
        setStatusStateCheck({...statusStateCheck, details: false});
    }

    const handlePreview = (e) => {
        e.preventDefault();
        setStatusState({preview: true});
        setStatusStateCheck({...statusStateCheck, details: false});
    }

    const handleAmount = (e) => {
        e.preventDefault();
        setStatusState({amount: true});
        setStatusStateCheck({...statusStateCheck, amount: false});
    }

  return (
    <div className="header_status_wrap xl-mg-tp10 xl7 l9 m10">
        <div className="header_status_line_wrap mpad5 flex_row">
            <div className="header_status_line xl9 sm8"></div>
        </div>
        <div className="header_status m10 mpad5 flex_row">
            <div className="header_status_start status_gap flex_row">
                <div className="status_wrap flex_column">
                    {statusStateCheck.overview == true ? <img  alt="sendit" onClick={handleOverview} src="/svg/mark.svg" /> : 
                    <div className='status_circle flex_row'><p>01</p></div>}
                    <p>Overview</p>
                </div>
            </div>
            <div className="header_status_next flex_row">
                <div className="status_wrap flex_column">
                {statusStateCheck.details == true ? <img  alt="sendit" onClick={handleDetails} src="/svg/mark.svg" /> : 
                    <div className='status_circle flex_row'><p>02</p></div>}
                    <p>Details</p>
                </div>
            </div>
            <div className="header_status_next flex_row">
                <div className="status_wrap flex_column">
                    {statusStateCheck.preview == true ? <img  alt="sendit" onClick={handlePreview} src="/svg/mark.svg" /> : 
                    <div className='status_circle flex_row'><p>03</p></div>}
                    <p>Preview</p>
                </div>
            </div>
            <div className="header_status_next flex_row">
                <div className="status_wrap flex_column">
                {statusStateCheck.amount == true ? <img  alt="sendit" onClick={handleAmount} src="/svg/mark.svg" /> : 
                    <div className='status_circle flex_row'><p>04</p></div>}
                    <p>Amount</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PackageStatus