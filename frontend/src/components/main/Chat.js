import React from 'react'

const Chat = () => {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>SocialV | Responsive Bootstrap 5 Admin Dashboard Template</title>
          
            <div className="wrapper">
                
                <div id="content-page" className="content-page">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                            <div className="card-body chat-page p-0">
                                <div className="chat-data-block">
                                <div className="row">
                                    <div className="col-lg-3 chat-data-left scroller">
                                    <div className="chat-search pt-3 ps-3">
                                        <div className="d-flex align-items-center">
                                        <div className="chat-profile me-3">
                                            <img src="/images/user/1.jpg" alt="chat-user" className="avatar-60 " />
                                        </div>
                                        <div className="chat-caption">
                                            <h5 className="mb-0">Bni Jordan</h5>
                                            <p className="m-0">Web Designer</p>
                                        </div>
                                        <button type="submit" className="close-btn-res p-3"><i className="ri-close-fill" /></button>
                                        </div>
                                        <div id="user-detail-popup" className="scroller">
                                        <div className="user-profile">
                                            <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                            <div className="user text-center mb-4">
                                            <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" />
                                            </a>
                                            <div className="user-name mt-4">
                                                <h4 className="text-center">Bni Jordan</h4>
                                            </div>
                                            <div className="user-desc">
                                                <p className="text-center">Web Designer</p>
                                            </div>
                                            </div>
                                            <hr />
                                            <div className="user-detail text-left mt-4 ps-4 pe-4">
                                            <h5 className="mt-4 mb-4">About</h5>
                                            <p>It is long established fact that a reader will be distracted bt the reddable.</p>
                                            <h5 className="mt-3 mb-3">Status</h5>
                                            <ul className="user-status p-0">
                                                <li className="mb-1"><i className="ri-checkbox-blank-circle-fill text-success pe-1" /><span>Online</span></li>
                                                <li className="mb-1"><i className="ri-checkbox-blank-circle-fill text-warning pe-1" /><span>Away</span></li>
                                                <li className="mb-1"><i className="ri-checkbox-blank-circle-fill text-danger pe-1" /><span>Do Not Disturb</span></li>
                                                <li className="mb-1"><i className="ri-checkbox-blank-circle-fill text-light pe-1" /><span>Offline</span></li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="chat-searchbar mt-4">
                                        <div className="form-group chat-search-data m-0">
                                            <input type="text" className="form-control round" id="chat-search" placeholder="Search" />
                                            <i className="ri-search-line" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="chat-sidebar-channel scroller mt-4 ps-3">
                                        <h5 className>Public Channels</h5>
                                        <ul className="iq-chat-ui nav flex-column nav-pills">
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox1">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/05.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Team Discussions</h6>
                                                <span>Lorem Ipsum is</span>
                                                </div>
                                                <div className="chat-meta float-right text-center mt-2 me-1">
                                                <div className="chat-msg-counter bg-primary text-white">20</div>
                                                <span className="text-nowrap">05 min</span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox2">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/06.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Announcement</h6>
                                                <span>This Sunday we</span>
                                                </div>
                                                <div className="chat-meta float-right text-center mt-2 me-1">
                                                <div className="chat-msg-counter bg-primary text-white">10</div>
                                                <span className="text-nowrap">10 min</span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        </ul>
                                        <h5 className="mt-3">Private Channels</h5>
                                        <ul className="iq-chat-ui nav flex-column nav-pills">
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox3">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/07.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-warning" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Designer</h6>
                                                <span>There are many </span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox4">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/08.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Developer</h6>
                                                <span>passages of Lorem</span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox5">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/09.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-info" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Testing Team</h6>
                                                <span>Lorem Ipsum used</span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        </ul>
                                        <h5 className="mt-3">Direct Message</h5>
                                        <ul className="iq-chat-ui nav flex-column nav-pills">
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox6">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/10.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-dark" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Paul Molive</h6>
                                                <span>translation by</span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox7">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/05.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Paige Turner</h6>
                                                <span>Lorem Ipsum which</span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox8">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/06.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-primary" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Barb Ackue</h6>
                                                <span>simply random text</span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox9">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/07.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-danger" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Maya Didas</h6>
                                                <span> but also the leap</span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="pill" href="#chatbox10">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar me-2">
                                                <img src="/images/user/08.jpg" alt="chatuserimage" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-warning" /></span>
                                                </div>
                                                <div className="chat-sidebar-name">
                                                <h6 className="mb-0">Monty Carlo</h6>
                                                <span>Contrary to popular</span>
                                                </div>
                                            </div>
                                            </a>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="col-lg-9 chat-data p-0 chat-data-right">
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="default-block" role="tabpanel">
                                        <div className="chat-start">
                                            <span className="iq-start-icon text-primary"><i className="ri-message-3-line" /></span>
                                            <button id="chat-start" className="btn bg-white mt-3">Start
                                            Conversation!</button>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox1" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/05.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Team Discussions</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="user mb-4  text-center">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/05.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Bni Jordan</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Cape Town, RSA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">Bni</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Male</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex">
                                                <a href="#" className="chat-icon-phone bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer pe-0" id="dropdownMenuButton02" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton02">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/05.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/05.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/05.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center px-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox2" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3  ps-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/06.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Announcement</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="user mb-4 text-center">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/06.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Mark Jordan</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Atlanta, USA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">Mark</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Female</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex">
                                                <a href="#" className="chat-icon-phone bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-bs-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton01" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/06.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/06.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/06.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox3" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/07.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Designer</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile ">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="user text-center mb-4">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/07.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Paige Turner</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Cape Town, RSA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">pai</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Male</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex ">
                                                <a href="#" className="chat-icon-phone bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/07.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/07.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/07.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox4" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/08.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Developer</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile ">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="user mb-4 text-center">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/08.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Barb Ackue</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Cape Town, RSA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">Babe</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Feale</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex">
                                                <a href="#" className="chat-icon-phone bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/08.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/08.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/08.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox5" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/09.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Testing Team</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile ">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="user mb-4 text-center">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/09.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Peta Saireya</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Cape Town, RSA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">Pet</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Female</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex">
                                                <a href="#" className="chat-icon-phone bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton3">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/09.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/09.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/09.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox6" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/10.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Paul Molive</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile ">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="user mb-4 text-center">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/10.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Paul Molive</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Cape Town, RSA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">Pau</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Male</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex">
                                                <a href="#" className="chat-icon-phone  bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video  bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete  bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown  bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton4">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/10.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/10.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/10.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox7" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/05.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Paige Turner</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile ">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="user text-center mb-4">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/05.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Paige Turner</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Cape Town, RSA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">Pai</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Feale</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex">
                                                <a href="#" className="chat-icon-phone bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/05.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/05.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/05.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox8" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/06.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Barb Ackue</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="user text-center mb-4">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/06.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Barb Ackue</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Cape Town, RSA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">Babe</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Female</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex">
                                                <a href="#" className="chat-icon-phone bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton6">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/06.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/06.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/06.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox9" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/07.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Maya Didas</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile ">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="user text-center mb-4">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/07.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Maya Didas</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Cape Town, RSA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">Babe</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Male</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex">
                                                <a href="#" className="chat-icon-phone bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton7">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/07.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/07.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/07.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="chatbox10" role="tabpanel">
                                        <div className="chat-head">
                                            <header className="d-flex justify-content-between align-items-center bg-white pt-3 ps-3 pe-3 pb-3">
                                            <div className="d-flex align-items-center">
                                                <div className="sidebar-toggle">
                                                <i className="ri-menu-3-line" />
                                                </div>
                                                <div className="avatar chat-user-profile m-0 me-3">
                                                <img src="/images/user/08.jpg" alt="avatar" className="avatar-50 " />
                                                <span className="avatar-status"><i className="ri-checkbox-blank-circle-fill text-success" /></span>
                                                </div>
                                                <h5 className="mb-0">Monty Carlo</h5>
                                            </div>
                                            <div className="chat-user-detail-popup scroller">
                                                <div className="user-profile ">
                                                <button type="submit" className="close-popup p-3"><i className="ri-close-fill" /></button>
                                                <div className="text-center user mb-4">
                                                    <a className="avatar m-0">
                                                    <img src="/images/user/08.jpg" alt="avatar" />
                                                    </a>
                                                    <div className="user-name mt-4">
                                                    <h4>Monty Carlo</h4>
                                                    </div>
                                                    <div className="user-desc">
                                                    <p>Cape Town, RSA</p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="chatuser-detail text-left mt-4">
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Bni Name:</div>
                                                    <div className="col-6 col-md-6 text-right">Babe</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Tel:</div>
                                                    <div className="col-6 col-md-6 text-right">072 143 9920</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Date Of Birth:</div>
                                                    <div className="col-6 col-md-6 text-right">July 12, 1989</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Gender:</div>
                                                    <div className="col-6 col-md-6 text-right">Female</div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                    <div className="col-6 col-md-6 title">Language:</div>
                                                    <div className="col-6 col-md-6 text-right">Engliah</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="chat-header-icons d-flex">
                                                <a href="#" className="chat-icon-phone bg-soft-primary">
                                                <i className="ri-phone-line" />
                                                </a>
                                                <a href="#" className="chat-icon-video bg-soft-primary">
                                                <i className="ri-vidicon-line" />
                                                </a>
                                                <a href="#" className="chat-icon-delete bg-soft-primary">
                                                <i className="ri-delete-bin-line" />
                                                </a>
                                                <span className="dropdown bg-soft-primary">
                                                <i className="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer" id="dropdownMenuButton8" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu" />
                                                <span className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton8">
                                                    <a className="dropdown-item" href="#"><i className="ri-pushpin-2-line me-1 h5" />Pin to top</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-line me-1 h5" />Delete chat</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-time-line me-1 h5" />Block</a>
                                                </span>
                                                </span>
                                            </div>
                                            </header>
                                        </div>
                                        <div className="chat-content scroller">
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:45</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>How can we help? We're here for you! 😄</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/08.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:48</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Hey John, I am looking for the best admin template.</p>
                                                <p>Could you please help me to find it out? 🤔</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:49</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Absolutely!</p>
                                                <p>SocialV Dashboard is the responsive bootstrap 4 admin template.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/08.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:52</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Looks clean and fresh UI.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:53</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Thanks, from ThemeForest.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat chat-left">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/08.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:54</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>I will purchase it for sure. 👍</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="chat d-flex other-user">
                                            <div className="chat-user">
                                                <a className="avatar m-0">
                                                <img src="/images/user/1.jpg" alt="avatar" className="avatar-35 " />
                                                </a>
                                                <span className="chat-time mt-1">6:56</span>
                                            </div>
                                            <div className="chat-detail">
                                                <div className="chat-message">
                                                <p>Okay Thanks..</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="chat-footer p-3 bg-white">
                                            <form className="d-flex align-items-center" action="#">
                                            <div className="chat-attagement d-flex">
                                                <a href="#"><i className="far fa-smile pe-3" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-paperclip pe-3" aria-hidden="true" /></a>
                                            </div>
                                            <input type="text" className="form-control me-3" placeholder="Type your message" />
                                            <button type="submit" className="btn btn-primary d-flex align-items-center p-2"><i className="far fa-paper-plane" aria-hidden="true" /><span className="d-none d-lg-block ms-1">Send</span></button>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      );
}

export default Chat

