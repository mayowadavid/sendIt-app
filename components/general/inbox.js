import React from 'react'
import Image from 'next/image'

const Inbox = () => {
  return (
    <div className="body_layout flex_row">
        <div className="side_bar_wrap xl-off flex_column">
            <div className="logo">

            </div>
            <div className="side_middle_wrap">
                <div className="profile_icon icon_wrap">
                    <Image alt="sendit" src="svg/profile.svg" />
                </div>
                <div className="box_icon icon_wrap">
                    <Image alt="sendit" src="svg/box.svg" />
                </div>
                <div className="transaction_icon icon_wrap">
                    <Image alt="sendit" src="svg/transaction.svg" />
                </div>
                <div className="wallet_icon icon_wrap">
                    <Image alt="sendit" src="svg/wallet.svg" />
                </div>
            </div>
            <div className="side_footer_wrap">
                <div className="settings_icon icon_wrap">
                    <Image alt="sendit" src="svg/setting.svg" />
                </div>
                <div className="logOut_icon icon_wrap">
                    <Image alt="sendit" src="svg/logout.svg" />
                </div>
            </div>
        </div>
        <div className="right_wrap xl10">
            <div className="header flex_row">
                <div className="message_icon top_wrap">
                    <Image alt="sendit" src="svg/chat.svg" />
                </div>
                <div className="notifications_icon top_wrap">
                    <Image alt="sendit" src="svg/notification.svg" />
                </div>
                <div className="avatar_wrap flex_row">
                    <div className="avatar_icon">
                        <Image alt="sendit" src="svg/avatar.svg" />
                    </div>
                    <p>David</p>
                    <Image alt="sendit" src="svg/drop-arrow.svg" />
                </div>
            </div>
            <div className="inner_space xl-pad5">
                <div className="message_header">
                    <p>Message</p>
                </div>
                <div className="client_inbox_wrapper">
                    <div className="client_inbox_body">
                        <div className="client_contacts sm10 sm-pad5">
                            <div className="client_contact_header">
                                <div className="conversation_filter">
                                    <div className="conversation_filter_by xl9">
                                        <p>All Conversation</p> <Image alt="sendit" src="Image/Arrow - Down 2.png" />
                                    </div>
                                </div>
                                <div className="client_search">
                                    <Image alt="sendit" src="svg/search.svg" />
                                </div>
                            </div>
                            <div className="client_contact_list">
                                <div className="individual_contact">
                                    <div className="individual_contact_row">
                                        <div className="individual_avatar_holder">
                                            <Image alt="sendit" src="Image/featured3.png" />
                                        </div>
                                        <div className="individual_contact_title flex_row">
                                            <p>Jenny Wilson</p>
                                            <p>Lorem ipsum dolor sit...</p>
                                        </div>
                                    </div>
                                    <div className="individual_last_date">
                                        <p>1 day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="client_contact_list">
                                <div className="individual_contact">
                                    <div className="individual_contact_row">
                                        <div className="individual_avatar_holder">
                                            <Image alt="sendit" src="Image/featured3.png" />
                                        </div>
                                        <div className="individual_contact_title flex_row">
                                            <p>Jenny Wilson</p>
                                            <p>Lorem ipsum dolor sit...</p>
                                        </div>
                                    </div>
                                    <div className="individual_last_date">
                                        <p>1 day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="client_contact_list">
                                <div className="individual_contact">
                                    <div className="individual_contact_row">
                                        <div className="individual_avatar_holder">
                                            <Image alt="sendit" src="Image/featured3.png" />
                                        </div>
                                        <div className="individual_contact_title flex_row">
                                            <p>Jenny Wilson</p>
                                            <p>Lorem ipsum dolor sit...</p>
                                        </div>
                                    </div>
                                    <div className="individual_last_date">
                                        <p>1 day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="client_contact_list">
                                <div className="individual_contact">
                                    <div className="individual_contact_row">
                                        <div className="individual_avatar_holder">
                                            <Image alt="sendit" src="Image/featured3.png" />
                                        </div>
                                        <div className="individual_contact_title flex_row">
                                            <p>Jenny Wilson</p>
                                            <p>Lorem ipsum dolor sit...</p>
                                        </div>
                                    </div>
                                    <div className="individual_last_date">
                                        <p>1 day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="client_contact_list">
                                <div className="individual_contact">
                                    <div className="individual_contact_row">
                                        <div className="individual_avatar_holder">
                                            <Image alt="sendit" src="Image/featured3.png" />
                                        </div>
                                        <div className="individual_contact_title flex_row">
                                            <p>Jenny Wilson</p>
                                            <p>Lorem ipsum dolor sit...</p>
                                        </div>
                                    </div>
                                    <div className="individual_last_date">
                                        <p>1 day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="client_contact_list">
                                <div className="individual_contact">
                                    <div className="individual_contact_row">
                                        <div className="individual_avatar_holder">
                                            <Image alt="sendit" src="Image/featured3.png" />
                                        </div>
                                        <div className="individual_contact_title flex_row">
                                            <p>Jenny Wilson</p>
                                            <p>Lorem ipsum dolor sit...</p>
                                        </div>
                                    </div>
                                    <div className="individual_last_date">
                                        <p>1 day</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="client_inbox sm-off sm10">
                            <div className="client_inbox_header">
                                <div className="client_inbox_header_details">
                                    <p>Jenny Wilson</p>
                                    <p>Local time Dec 02, 3:03 AM EST</p>
                                </div>
                                <div className="client_inbox_search">
                                    <Image alt="sendit" src="Image/Search.png" />
                                    <input type="text" placeholder="Search Conversation" />
                                </div>
                                <div className="client_inbox_more">
                                    <Image alt="sendit" src="svg/more_horizontal.svg" />
                                </div>
                            </div>
                            <div className="client_inbox_chat_body sm-h6">
                                <div className="individual_messsage_container">
                                    <div className="individual_message">
                                        <div className="individual_message_row  sm8 m8">
                                            <div className="message_avatar sm2 m2">
                                                <Image alt="sendit" src="Image/category.png" />
                                            </div>
                                            <div className="message_details sm8 m7">
                                                <p>Esther Howard</p>
                                                <p className="sm9">This is long text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis, nibh leo. Nulla ullamcorper.</p>
                                            </div>
                                        </div>
                                        <div className="message_time sm2 m2">
                                            <p>7:35 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="individual_messsage_container">
                                    <div className="individual_message">
                                        <div className="individual_message_row  sm8 m8">
                                            <div className="message_avatar sm2 m2">
                                                <Image alt="sendit" src="Image/category.png" />
                                            </div>
                                            <div className="message_details sm8 m7">
                                                <p>Esther Howard</p>
                                                <p className="sm9">This is long text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis, nibh leo. Nulla ullamcorper.</p>
                                            </div>
                                        </div>
                                        <div className="message_time sm2 m2">
                                            <p>7:35 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="individual_messsage_container">
                                    <div className="individual_message">
                                        <div className="individual_message_row  sm8 m8">
                                            <div className="message_avatar sm2 m2">
                                                <Image alt="sendit" src="Image/category.png" />
                                            </div>
                                            <div className="message_details sm8 m7">
                                                <p>Esther Howard</p>
                                                <p className="sm9">This is long text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis, nibh leo. Nulla ullamcorper.</p>
                                            </div>
                                        </div>
                                        <div className="message_time sm2 m2">
                                            <p>7:35 AM</p>
                                        </div>
                                    </div>
                                    <div className="individual_file flex_row">
                                        <div className="individual_file_container">
                                            <div className="individual_file_header">
                                                <Image alt="sendit" src="svg/image_alt.svg" />
                                                <p>Sketch file.jpg</p>
                                            </div>
                                            <div className="individual_file_wrapper">
                                                <div className="file_download_icon">
                                                    <Image alt="sendit" src="svg/download.svg" />
                                                </div>
                                                <Image alt="sendit" src="Image/chat_file.png" />
                                            </div>
                                        </div>
                                        <div className="individual_file_container">
                                            <div className="individual_file_header">
                                                <Image alt="sendit" src="svg/image_alt.svg" />
                                                <p>Sketch file.jpg</p>
                                            </div>
                                            <div className="individual_file_wrapper">
                                                <div className="file_download_icon">
                                                    <Image alt="sendit" src="svg/download.svg" />
                                                </div>
                                                <Image alt="sendit" src="Image/chat_file 2.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="individual_messsage_container">
                                    <div className="individual_message">
                                        <div className="individual_message_row  sm8 m8">
                                            <div className="message_avatar sm2 m2">
                                                <Image alt="sendit" src="Image/category.png" />
                                            </div>
                                            <div className="message_details sm8 m7">
                                                <p>Esther Howard</p>
                                                <p className="sm9">This is long text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac sagittis, nibh leo. Nulla ullamcorper.</p>
                                            </div>
                                        </div>
                                        <div className="message_time sm2 m2">
                                            <p>7:35 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="client_inbox_chat_footer">
                                <div className="chat_inbox_input">
                                    <input type="text" name="message" placeholder="write your message here" />
                                    <div className="chat_submit">
                                        <p>Send</p>
                                    </div>
                                </div>
                                <div className="chat_attachments xl3">
                                    <div className="chat_link">
                                        <Image alt="sendit" src="svg/link_02.svg" />
                                    </div>
                                    <div className="chat_emoji">
                                        <Image alt="sendit" src="svg/emoji.svg" />
                                    </div>
                                    <div className="chat_video">
                                        <Image alt="sendit" src="svg/Video.svg" />
                                    </div>
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

export default Inbox