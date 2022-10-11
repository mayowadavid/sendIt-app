import React from 'react'
import Image from 'next/image'
import Sidebar from './sidebar'
import Header from './header'

const Inbox = () => {
  return (
    <div className="body_layout flex_row">
        <Sidebar />
        <div className="right_wrap xl10">
            <Header />
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
                                        <p>All Conversation</p> <img  alt="sendit" src="img/Arrow - Down 2.png" />
                                    </div>
                                </div>
                                <div className="client_search">
                                    <img  alt="sendit" src="svg/search.svg" />
                                </div>
                            </div>
                            <div className="client_contact_list">
                                <div className="individual_contact">
                                    <div className="individual_contact_row">
                                        <div className="individual_avatar_holder">
                                            <img  alt="sendit" src="img/featured3.png" />
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
                                            <img  alt="sendit" src="img/featured3.png" />
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
                                            <img  alt="sendit" src="img/featured3.png" />
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
                                            <img  alt="sendit" src="img/featured3.png" />
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
                                            <img  alt="sendit" src="img/featured3.png" />
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
                                            <img  alt="sendit" src="img/featured3.png" />
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
                                    <img  alt="sendit" src="img/Search.png" />
                                    <input type="text" placeholder="Search Conversation" />
                                </div>
                                <div className="client_inbox_more">
                                    <img  alt="sendit" src="svg/more_horizontal.svg" />
                                </div>
                            </div>
                            <div className="client_inbox_chat_body sm-h6">
                                <div className="individual_messsage_container">
                                    <div className="individual_message">
                                        <div className="individual_message_row  sm8 m8">
                                            <div className="message_avatar sm2 m2">
                                                <img  alt="sendit" src="img/category.png" />
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
                                                <img  alt="sendit" src="img/category.png" />
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
                                                <img  alt="sendit" src="img/category.png" />
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
                                                <img  alt="sendit" src="svg/image_alt.svg" />
                                                <p>Sketch file.jpg</p>
                                            </div>
                                            <div className="individual_file_wrapper">
                                                <div className="file_download_icon">
                                                    <img  alt="sendit" src="svg/download.svg" />
                                                </div>
                                                <img  alt="sendit" src="img/chat_file.png" />
                                            </div>
                                        </div>
                                        <div className="individual_file_container">
                                            <div className="individual_file_header">
                                                <img  alt="sendit" src="svg/image_alt.svg" />
                                                <p>Sketch file.jpg</p>
                                            </div>
                                            <div className="individual_file_wrapper">
                                                <div className="file_download_icon">
                                                    <img  alt="sendit" src="svg/download.svg" />
                                                </div>
                                                <img  alt="sendit" src="img/chat_file 2.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="individual_messsage_container">
                                    <div className="individual_message">
                                        <div className="individual_message_row  sm8 m8">
                                            <div className="message_avatar sm2 m2">
                                                <img  alt="sendit" src="img/category.png" />
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
                                                <img  alt="sendit" src="svg/image_alt.svg" />
                                                <p>Sketch file.jpg</p>
                                            </div>
                                            <div className="individual_file_wrapper">
                                                <div className="file_download_icon">
                                                    <img  alt="sendit" src="svg/download.svg" />
                                                </div>
                                                <img  alt="sendit" src="img/chat_file.png" />
                                            </div>
                                        </div>
                                        <div className="individual_file_container">
                                            <div className="individual_file_header">
                                                <img  alt="sendit" src="svg/image_alt.svg" />
                                                <p>Sketch file.jpg</p>
                                            </div>
                                            <div className="individual_file_wrapper">
                                                <div className="file_download_icon">
                                                    <img  alt="sendit" src="svg/download.svg" />
                                                </div>
                                                <img  alt="sendit" src="img/chat_file 2.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="individual_messsage_container">
                                    <div className="individual_message">
                                        <div className="individual_message_row  sm8 m8">
                                            <div className="message_avatar sm2 m2">
                                                <img  alt="sendit" src="img/category.png" />
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
                                    <textarea type="text" name="message" placeholder="write your message here" />
                                    <div className="chat_submit">
                                        <p>Send</p>
                                    </div>
                                </div>
                                <div className="chat_attachments xl3">
                                    <div className="chat_link">
                                        <img  alt="sendit" src="svg/link_02.svg" />
                                    </div>
                                    <div className="chat_emoji">
                                        <img  alt="sendit" src="svg/emoji.svg" />
                                    </div>
                                    <div className="chat_video">
                                        <img  alt="sendit" src="svg/Video.svg" />
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