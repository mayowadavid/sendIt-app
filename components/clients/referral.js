import Header from '../general/header'
import Sidebar from '../general/sidebar'
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../context/mainContext";
import Image from 'next/image'

const Referral = () => {
    const { setSideState } = useContext(MainContext);
    const [email, setEmail] = useState('');

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
                                <Image src="/svg/envelope.svg" alt=""/>
                            </div>
                            <div className="referral_line xl-off xl-mg-bt10"></div>
                            <div className="refferal_icon_wrap flex_row">
                                <Image src="/svg/contact.svg" alt=""/>
                            </div>
                            <div className="referral_line xl-off xl-mg-tp10"></div>
                            <div className="refferal_icon_wrap flex_row">
                                <Image src="/svg/cash.svg" alt=""/>
                            </div>
                        </div>
                        <div className="referral_row_content flex_row">
                            <div className="referral_content_col m9 m-mg-tp10 sm-mg-tp10 sm9 flex_column">
                                <div className="refferal_icon_wrap_sm xl-off m-on-flex sm-on-flex flex_row">
                                    <Image src="/svg/envelope.svg" alt=""/>
                                </div>
                                <p>Send Invitation</p>
                                <p className="xl10">Send your referral link to
                                    friends and tell them how
                                     cool Sendit is.</p>
                            </div>
                            <div className="referral_content_col m9 m-mg-tp10 sm-mg-tp10 sm9 flex_column">
                                <div className="refferal_icon_wrap_sm xl-off m-on-flex sm-on-flex flex_row">
                                    <Image src="/svg/contact.svg" alt=""/>
                                </div>
                                <p>Registration</p>
                                <p className="xl10">Let them register to our
                                    services using our
                                    referral link.</p>
                            </div>
                            <div className="referral_content_col m9 m-mg-tp10 sm-mg-tp10 sm9 flex_column">
                                <div className="refferal_icon_wrap_sm xl-off m-on-flex sm-on-flex flex_row">
                                    <Image src="/svg/cash.svg" alt=""/>
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
                                <Image src="/svg/w-plane.svg" alt=""/>
                            </div>
                            <input type="text" onChange={handleEmail} placeholder="email address" />
                        </div>
                    </div>
                    <div className="referal_row_invite m-mg-tp10">
                        <p>Share referal link</p>
                        <p>You can also share your referral link by copying and sending it or sending on your social media.</p>
                        <div className="referel_form flex_row">
                            <div className="referal_form_code m10 l10 m-mg-tp10 flex_row">
                                <p>#ffvvv64f433e</p>
                                <p className="m-off">Copy link</p>
                            </div>
                            <div className="referal_socials m10 l10 m-mg-tp10 l-mg-tp5 flex_row">
                                <div className="socials r-social flex_row">
                                    <Image src="/svg/facebook.svg" alt=""/>
                                </div>
                                <div className="socials r-social flex_row">
                                    <Image src="/svg/twitter.svg" alt=""/>
                                </div>
                                <div className="socials r-social flex_row">
                                    <Image src="/svg/linkedn.svg" alt=""/>
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