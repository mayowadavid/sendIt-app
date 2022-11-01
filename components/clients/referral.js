import Header from '../general/header'
import Sidebar from '../general/sidebar'
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../context/mainContext";
import Image from 'next/image'

const Referral = () => {
    const { setSideState } = useContext(MainContext);
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('#ffvvv64f433e');
    const [copySuccess, setCopySuccess] = useState('');

    useEffect(()=> {
        setSideState({
            referral: true
        });
    }, []);

    const handleEmail = (e) => {
        e.preventDefault();
        const {value} = e.target;
        setEmail(value);
    }

    const copyReferalLink = () => {
        try {
            navigator.clipboard.writeText(url);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('failed');
        }
    }

  return (
    <div className="body_layout flex_row">
        <Sidebar />
        <div className="right_wrap xl10">
            <Header />
            <div className="inner_space xl-pad5">
                <div className="settings_header">
                    <p>Referrals</p>
                </div>
                <div className="shipper_settings_row">
                    <div className="referral_message">
                        <p>invite your friends to join sendit. if they sign up  and make their first subscription you get 50% referal comm
                            ission which you can use for subscription and withdraw to your bank.</p>
                    </div>
                    <div className="referral_flow flex_column">
                        <div className="referral_header_wrap xl10 xlgp20 m-off xl-jsty flex_row">
                            <div className="refferal_icon_wrap flex_row">
                                <img  alt="sendit" src="/svg/envelope.svg" />
                            </div>
                            <div className="referral_line xl-off xl-mg-bt10"></div>
                            <div className="refferal_icon_wrap flex_row">
                                <img  alt="sendit" src="/svg/contact.svg" />
                            </div>
                            <div className="referral_line xl-off xl-mg-tp10"></div>
                            <div className="refferal_icon_wrap flex_row">
                                <img  alt="sendit" src="/svg/cash.svg" />
                            </div>
                        </div>
                        <div className="referral_row_content flex_row">
                            <div className="referral_content_col m9 m-mg-tp10 sm-mg-tp10 sm9 flex_column">
                                <div className="refferal_icon_wrap_sm xl-off m-on-flex sm-on-flex flex_row">
                                    <img  alt="sendit" src="/svg/envelope.svg" />
                                </div>
                                <p>Send Invitation</p>
                                <p className="xl10">Send your referral link to
                                    friends and tell them how
                                     cool Sendit is.</p>
                            </div>
                            <div className="referral_content_col m9 m-mg-tp10 sm-mg-tp10 sm9 flex_column">
                                <div className="refferal_icon_wrap_sm xl-off m-on-flex sm-on-flex flex_row">
                                    <img  alt="sendit" src="/svg/contact.svg" />
                                </div>
                                <p>Registration</p>
                                <p className="xl10">Let them register to our
                                    services using our
                                    referral link.</p>
                            </div>
                            <div className="referral_content_col m9 m-mg-tp10 sm-mg-tp10 sm9 flex_column">
                                <div className="refferal_icon_wrap_sm xl-off m-on-flex sm-on-flex flex_row">
                                    <img  alt="sendit" src="/svg/cash.svg" />
                                </div>
                                <p>Commission</p>
                                <p className="xl10">Get instant commission
                                    after first subscription
                                    payment plan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="referal_row_invite">
                        <p>Invite your friends</p>
                        <p>Input your friends email address to send them invitation to join Sendit.</p>
                        <div className="referel_form flex_row m-mg-tp10">
                            <div className="referral_form_button flex_row">
                                <img  alt="sendit" src="/svg/w-plane.svg" />
                            </div>
                            <input type="text" onChange={handleEmail} placeholder="Email address" />
                        </div>
                    </div>
                    <div className="referal_row_invite m-mg-tp10">
                        <p>Share referal link</p>
                        <p>You can also share your referral link by copying and sending it or sending on your social media.</p>
                        <div className="referel_form flex_row">
                            <div className="referal_form_code m10 l10 m-mg-tp10 flex_row">
                                <p>#ffvvv64f433e</p>
                                { copySuccess !== 'Copied!' ? <p className="m-off" onClick={copyReferalLink}>Copy link</p> : <p className={`m-off ${copySuccess == 'Copied!' ? 'green': 'red'}`}>{copySuccess}</p>}
                            </div>
                            <div className="referal_socials m10 l10 m-mg-tp10 l-mg-tp5 flex_row">
                                <div className="socials r-social flex_row">
                                    <img  alt="sendit" src="/svg/facebook.svg" />
                                </div>
                                <div className="socials r-social flex_row">
                                    <img  alt="sendit" src="/svg/twitter.svg" />
                                </div>
                                <div className="socials r-social flex_row">
                                    <img  alt="sendit" src="/svg/linkedn.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Referral