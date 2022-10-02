import React from 'react'

const PackageStatus = () => {
  return (
    <div className="header_status_wrap xl-mg-tp10 xl7 l9 m10">
        <div className="header_status_line_wrap mpad5 flex_row">
            <div className="header_status_line xl9 sm8"></div>
        </div>
        <div className="header_status m10 mpad5 flex_row">
            <div className="header_status_start status_gap flex_row">
                <div className="status_wrap flex_column">
                    <img src="/svg/mark.svg" alt=""/>
                    <p>Overview</p>
                </div>
            </div>
            <div className="header_status_next flex_row">
                <div className="status_wrap flex_column">
                    <img src="/svg/mark.svg" alt=""/>
                    <p>Details</p>
                </div>
            </div>
            <div className="header_status_next flex_row">
                <div className="status_wrap flex_column">
                    <img src="/svg/mark.svg" alt=""/>
                    <p>Preview</p>
                </div>
            </div>
            <div className="header_status_next flex_row">
                <div className="status_wrap flex_column">
                    <img src="/svg/mark.svg" alt=""/>
                    <p>Amount</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PackageStatus