import React, { useState } from 'react'

const ShareModal = () => {
    const [url, setUrl] = useState('');
    const socialUrl = ['https://www.facebook.com/sharer/sharer.php?u=',
                        'https://twitter.com/intent/tweet?url=',
                        'https://www.linkedin.com/shareArticle?mini=true&url='];

    const openTab = (e, i) => {
        e.preventDefault();
        window.open(`${socialUrl[i] + url}`, '_blank');
    }

  return (
    <div className="social_row flex_row">
        <div onClick={(e)=> openTab(e, 0)} className="socials flex_row">
            <img src="/svg/facebook.svg" alt="sendit" />
        </div>
        <div onClick={(e)=> openTab(e, 1)} className="socials flex_row">
            <img src="/svg/twitter.svg" alt="sendit" />
        </div>
        <div onClick={(e)=> openTab(e, 2)} className="socials flex_row">
            <img src="/svg/linkedn.svg" alt="sendit" />
        </div>
        <div className="socials flex_row">
            <img src="/svg/link.svg" alt="sendit" />
        </div>
    </div>
  )
}

export default ShareModal