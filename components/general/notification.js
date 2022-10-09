import React from 'react'
import Image from 'next/image'

const Notification = () => {
  return (
    <div className="body_layout flex_row">
        <div className="side_bar_wrap xl-off flex_column">
            <div className="logo">

            </div>
            <div className="side_middle_wrap">
                <div className="profile_icon icon_wrap">
                    <img  alt="sendit" src="svg/profile.svg" />
                </div>
                <div className="box_icon icon_wrap">
                    <img  alt="sendit" src="svg/box.svg" />
                </div>
                <div className="transaction_icon icon_wrap">
                    <img  alt="sendit" src="svg/transaction.svg" />
                </div>
                <div className="wallet_icon icon_wrap">
                    <img  alt="sendit" src="svg/wallet.svg" />
                </div>
            </div>
            <div className="side_footer_wrap">
                <div className="settings_icon icon_wrap">
                    <img  alt="sendit" src="svg/setting.svg" />
                </div>
                <div className="logOut_icon icon_wrap">
                    <img  alt="sendit" src="svg/logout.svg" />
                </div>
            </div>
        </div>
        <div className="right_wrap xl10">
            <div className="header flex_row">
                <div className="message_icon top_wrap">
                    <img  alt="sendit" src="svg/chat.svg" />
                </div>
                <div className="notifications_icon top_wrap">
                    <img  alt="sendit" src="svg/notification.svg" />
                </div>
                <div className="avatar_wrap flex_row">
                    <div className="avatar_icon">
                        <img  alt="sendit" src="svg/avatar.svg" />
                    </div>
                    <p>David</p>
                    <img  alt="sendit" src="svg/drop-arrow.svg" />
                </div>
            </div>
            <div className="inner_space xl-pad5">
                <div className="message_header">
                    <p>Notifications</p>
                </div>
                <div class='notificationWrap xl10'>
                    <div class='recentNotification xl10'>
                        <div class='notifcationHead remove_margin border'>
                            <p>Recent Notifications</p>
                        </div>
                        <div class='notifcation_row border flex_row'>
                                    <div class='notification_no_action flex_row'>
                                        <div class='icon_section flex_row xl1 sm2'>
                                            <img  alt="sendit" src='/svg/notifcationFull.svg' />
                                        </div>
                                        <div class='icon_section xl8 remove_margin sm8'>
                                            <p>[Achievement Name] You’ve earned an achievement!</p>
                                            <p>7:38 Am</p>
                                        </div>
                                    </div>
                                    <div class='notification_action flex_row'>
                                        <div class='notification_button remove_margin'>
                                            <p>Open</p>
                                        </div>
                                        <div class='notification_close sm-off'>
                                            <img  alt="sendit" src="/svg/close_small.svg" />
                                        </div>
                                    </div>
                        </div>
                        <div class='notifcation_row border flex_row'>
                            <div class='notification_no_action flex_row'>
                                <div class='icon_section flex_row xl1 sm2'>
                                    <img  alt="sendit" src='/svg/notifcationFull.svg' />
                                </div>
                                <div class='icon_section xl8 remove_margin sm8'>
                                    <p>[Achievement Name] You’ve earned an achievement!</p>
                                    <p>7:38 Am</p>
                                </div>
                            </div>
                            <div class='notification_action flex_row'>
                                <div class='notification_button remove_margin'>
                                    <p>Open</p>
                                </div>
                                <div class='notification_close sm-off'>
                                    <img  alt="sendit" src="/svg/close_small.svg" />
                                </div>
                            </div>
                </div>
                    </div>
                    <div class='earlierNotification xl10'>
                    <div class='notifcationHead remove_margin border'>
                            <p>Earlier Notifications</p>
                    </div>
                        <div class='notifcation_row border flex_row'>
                                        <div class='notification_no_action flex_row'>
                                            <div class='icon_section flex_row xl1 sm2'>
                                                <img  alt="sendit" src='/svg/notifcationFull.svg' />
                                            </div>
                                            <div class='icon_section xl8 remove_margin sm8'>
                                                <p>Congratulations! You’ve received your first order today!</p>
                                                <p>7:38 Am</p>
                                            </div>
                                        </div>
                                        <div class='notification_action flex_row'>
                                            <div class='notification_button remove_margin'>
                                                <p>Open</p>
                                            </div>
                                            <div class='notification_close sm-off'>
                                                <img  alt="sendit" src="/svg/close_small.svg" />
                                            </div>
                                        </div>
                        </div>
                        <div class='notifcation_row border flex_row'>
                            <div class='notification_no_action flex_row'>
                                <div class='icon_section flex_row xl1 sm2'>
                                    <img  alt="sendit" src='/svg/notifcationFull.svg' />
                                </div>
                                <div class='icon_section xl8 remove_margin sm8'>
                                    <p>Congratulations! You’ve received your first order today!</p>
                                    <p>7:38 Am</p>
                                </div>
                            </div>
                            <div class='notification_action flex_row'>
                                <div class='notification_button remove_margin'>
                                    <p>Open</p>
                                </div>
                                <div class='notification_close sm-off'>
                                    <img  alt="sendit" src="/svg/close_small.svg" />
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

export default Notification