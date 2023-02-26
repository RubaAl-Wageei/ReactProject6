import React from 'react'

const Email = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>SocialV | Responsive Bootstrap 5 Admin Dashboard Template</title>
          
        
            <div className="wrapper">
                <div id="content-page" className="content-page">
                    <div className="container relative">
                        <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                            <div className="card-body">
                                <div className>
                                <div className="iq-email-list">
                                    <button className="btn btn-primary btn-lg btn-block mb-3 p-2 w-100" data-target="#compose-email-popup" data-toggle="modal"><i className="ri-send-plane-line me-2" />New Message</button>
                                    <div className="iq-email-ui nav flex-column nav-pills">
                                    <a className="nav-link active" role="button" data-bs-toggle="pill" href="#mail-inbox"><div className="d-flex align-items-center justify-content-between"><span><i className="ri-mail-line" />Inbox</span><span className="badge bg-primary ms-2">4</span></div></a>
                                    <a className="nav-link" role="button" data-bs-toggle="pill" href="#mail-starred"><i className="ri-star-line" />Starred</a>
                                    <a className="nav-link" role="button" data-bs-toggle="pill" href="#mail-snoozed"><i className="ri-time-line" />Snoozed</a>
                                    <a className="nav-link" role="button" data-bs-toggle="pill" href="#mail-draft"><i className="ri-file-list-2-line" />Draft</a>
                                    <a className="nav-link" role="button" data-bs-toggle="pill" href="#mail-sent"><i className="ri-mail-send-line" />Sent Mail</a>
                                    <a className="nav-link" role="button" data-bs-toggle="pill" href="#mail-trash"><i className="ri-delete-bin-line" />Trash</a>
                                    <a className="nav-link" role="button" data-bs-toggle="pill" href="#mail-important"><i className="ri-bookmark-line" />Important</a>
                                    <a className="nav-link" role="button" data-bs-toggle="pill" href="#mail-spam"><i className="ri-spam-line" />Spam</a>
                                    </div>
                                    <h6 className="mt-4 mb-3">Labels</h6>
                                    <ul className="iq-email-ui iq-email-label list-inline p-0 m-0">
                                    <li><a href="#"><i className="ri-focus-fill text-primary" />Personal</a></li>
                                    <li><a href="#"><i className="ri-focus-fill text-danger" />Company</a></li>
                                    <li><a href="#"><i className="ri-focus-fill text-success" />Important</a></li>
                                    <li><a href="#"><i className="ri-focus-fill text-info" />Private</a></li>
                                    <li><a href="#"><i className="ri-focus-fill text-warning" />Private</a></li>
                                    <li><a href="#"><i className="ri-add-circle-line" />Add New Labels</a></li>
                                    </ul>
                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                    <h6 className="mt-4 mb-3">Storage</h6>
                                    <div className="iq-progress-bar">
                                        <span className="bg-danger" data-percent={90} />
                                    </div>
                                    <span className="mt-1 d-inline-block w-100">7.02 GB (46%) of 15 GB used</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-9 mail-box-detail">
                            <div className="card">
                            <div className="card-body p-0">
                                <div className>
                                <div className="iq-email-to-list p-3">
                                    <div className="iq-email-to-list-detail d-flex justify-content-between">
                                    <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                        <li className="me-1">
                                        <div id="navbarDropdown" data-bs-toggle="dropdown">
                                            <div className="d-flex align-items-center form-check">
                                            <input type="checkbox" className="form-check-input" id="customCheck1" />
                                            <label className="form-check-label" htmlFor="customCheck1"><i className="ri-arrow-down-s-line" /></label>
                                            </div>
                                        </div>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                        </li>
                                        <li className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Reload"><a href="#"><i className="ri-restart-line" /></a></li>
                                        <li className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Archive"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                        <li className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                        <li className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Inbox"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Zoom"><a href="#"><i className="ri-drag-move-2-line" /></a></li>
                                    </ul>
                                    <div className="iq-email-search d-flex">
                                        <form className="me-2 position-relative searchbox">
                                        <div className="form-group mb-0">
                                            <input type="email" className="form-control search-input" id="exampleInputEmail1" placeholder="Search" />
                                            <a className="search-link" href="#"><i className="ri-search-line" /></a>
                                        </div>
                                        </form>
                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                        <li className="me-2">
                                            <a className="font-size-14" href="#" id="navbarDropdown1" data-bs-toggle="dropdown">
                                            1 - 50 of 505
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                            <a className="dropdown-item" href="#">20 per page</a>
                                            <a className="dropdown-item" href="#">50 per page</a>
                                            <a className="dropdown-item" href="#">100 per page</a>
                                            </div>
                                        </li>
                                        <li className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                        <li className="me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                        <li className="me-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Setting"><a href="#"><i className="ri-list-settings-line" /></a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="iq-email-listbox">
                                    <div className="tab-content">
                                    <div className="tab-pane fade show active" id="mail-inbox" role="tabpanel">
                                        <ul className="iq-email-sender-list">
                                        <li className="iq-unread">
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk" />
                                                    <label className="form-check-label" htmlFor="mailk" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle text-warning" />
                                                <a href="#" className="iq-email-title">Jopour Xiong (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@MackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@MackenzieBnio - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">08:00 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div> 
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk1" />
                                                    <label className="form-check-label" htmlFor="mailk1" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Deray Billings (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Megan Allen (@meganallen) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">08:15 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk2" />
                                                    <label className="form-check-label" htmlFor="mailk2" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Lauren Drury (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Dixa Horton (@dixahorton) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk3" />
                                                    <label className="form-check-label" htmlFor="mailk3" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Fabian Ros (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk4" />
                                                    <label className="form-check-label" htmlFor="mailk4" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Let Hunre (@lethunre) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li className="iq-unread">
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk017" />
                                                    <label className="form-check-label" htmlFor="mailk017" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle text-warning" />
                                                <a href="#" className="iq-email-title">Megan Allen (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk6" />
                                                    <label className="form-check-label" htmlFor="mailk6" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Jopour Xiong (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk7" />
                                                    <label className="form-check-label" htmlFor="mailk7" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Deray Billings (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li className="iq-unread">
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk8" />
                                                    <label className="form-check-label" htmlFor="mailk8" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle text-warning" />
                                                <a href="#" className="iq-email-title">Lauren Drury (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Let Hunre (@lethunre) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk9" />
                                                    <label className="form-check-label" htmlFor="mailk9" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Fabian Ros (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk011" />
                                                    <label className="form-check-label" htmlFor="mailk011" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk11" />
                                                    <label className="form-check-label" htmlFor="mailk11" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Megan Allen (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk12" />
                                                    <label className="form-check-label" htmlFor="mailk12" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Jopour Xiong (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk13" />
                                                    <label className="form-check-label" htmlFor="mailk13" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Deray Billings (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg(@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk14" />
                                                    <label className="form-check-label" htmlFor="mailk14" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Lauren Drury (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk15" />
                                                    <label className="form-check-label" htmlFor="mailk15" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Fabian Ros (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Let Hunre(@lethunre) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>                                    
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk16" />
                                                    <label className="form-check-label" htmlFor="mailk16" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>                                    
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk17" />
                                                    <label className="form-check-label" htmlFor="mailk17" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Megan Allen (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="mail-starred" role="tabpanel">
                                        <ul className="iq-email-sender-list">
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk02" />
                                                    <label className="form-check-label" htmlFor="mailk02" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Lauren Drury (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Dixa Horton (@dixahorton) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk03" />
                                                    <label className="form-check-label" htmlFor="mailk03" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Fabian Ros (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk04" />
                                                    <label className="form-check-label" htmlFor="mailk04" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Let Hunre (@lethunre) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                            <div className="email-app-details">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                <div className>
                                                    <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                        <li className="me-3">
                                                            <a href="javascript: void(0);" className="email-remove">
                                                            <i className="ri-arrow-left-line m-0 h4" />
                                                            </a>
                                                        </li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Mail"><a href="#"><i className="ri-mail-open-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Info"><a href="#"><i className="ri-information-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><a href="#"><i className="ri-delete-bin-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Unread"><a href="#"><i className="ri-mail-unread-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Transfer"><a href="#"><i className="ri-folder-transfer-line" /></a></li>
                                                        <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bookmark"><a href="#"><i className="ri-bookmark-line" /></a></li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                        <ul className="list-inline d-flex align-items-center justify-content-between m-0 p-0">
                                                            <li className="me-3">
                                                            <a className="font-size-14" href="#">1 of 505</a>
                                                            </li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Previous"><a href="#"><i className="ri-arrow-left-s-line" /></a></li>
                                                            <li className="me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Next"><a href="#"><i className="ri-arrow-right-s-line" /></a></li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <hr className="mt-0" />
                                                    <div className="iq-inbox-subject p-3">
                                                    <h5 className="mb-2">Your elite author Graphic Optimization reward is ready!</h5>
                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                        <img src="/images/user/user-1.jpg" className="img-fluid rounded-circle avatar-80" alt="#" />
                                                        <div className="iq-subject-status align-self-center">
                                                            <h6 className="mb-0">SocialV team <a href="dummy@SocialV.com">dummy@SocialV.com</a></h6>
                                                            <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                to Me
                                                            </a>
                                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                                <table className="iq-inbox-details">
                                                                <tbody>
                                                                    <tr>
                                                                    <td>from:</td>
                                                                    <td>Medium Daily Digest</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>reply-to:</td>
                                                                    <td>noreply@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>to:</td>
                                                                    <td>iqonicdesigns@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>date:</td>
                                                                    <td>13 Dec 2019, 08:30</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>subject:</td>
                                                                    <td>The Golden Rule</td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td>security:</td>
                                                                    <td>Standard encryption</td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <span className="align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>
                                                        <div className="iq-inbox-body mt-5">
                                                        <p>Hi Jopour Xiong,</p>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                                        <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                                        <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />
                                                        <div className="attegement">
                                                        <h6 className="mb-2">ATTACHED FILES:</h6>
                                                        <ul>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.doc</span>
                                                            </li>
                                                            <li className="icon icon-attegment">
                                                            <i className="fa fa-file-text-o" aria-hidden="true" /> <span className="ms-1">mydoc.pdf</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>                              </li>
                                        <li className="iq-unread">
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk5" />
                                                    <label className="form-check-label" htmlFor="mailk5" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle text-warning" />
                                                <a href="#" className="iq-email-title">Megan Allen (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk018" />
                                                    <label className="form-check-label" htmlFor="mailk018" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Jopour Xiong (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="mail-snoozed" role="tabpanel">
                                        <ul className="iq-email-sender-list">
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk004" />
                                                    <label className="form-check-label" htmlFor="mailk004" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Let Hunre (@lethunre) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li className="iq-unread">
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk012" />
                                                    <label className="form-check-label" htmlFor="mailk012" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle text-warning" />
                                                <a href="#" className="iq-email-title">Megan Allen (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk024" />
                                                    <label className="form-check-label" htmlFor="mailk024" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Jopour Xiong (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="mail-draft" role="tabpanel">
                                        <ul className="iq-email-sender-list">
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk09" />
                                                    <label className="form-check-label" htmlFor="mailk09" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Fabian Ros (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk013" />
                                                    <label className="form-check-label" htmlFor="mailk013" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk014" />
                                                    <label className="form-check-label" htmlFor="mailk014" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Megan Allen (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk019" />
                                                    <label className="form-check-label" htmlFor="mailk019" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Jopour Xiong (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk025" />
                                                    <label className="form-check-label" htmlFor="mailk025" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Deray Billings (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg(@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="mail-sent" role="tabpanel">
                                        <ul className="iq-email-sender-list">
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk015" />
                                                    <label className="form-check-label" htmlFor="mailk015" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Megan Allen (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk020" />
                                                    <label className="form-check-label" htmlFor="mailk020" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Jopour Xiong (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk026" />
                                                    <label className="form-check-label" htmlFor="mailk026" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Deray Billings (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg(@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk027" />
                                                    <label className="form-check-label" htmlFor="mailk027" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Lauren Drury (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk032" />
                                                    <label className="form-check-label" htmlFor="mailk032" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Fabian Ros (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Let Hunre(@lethunre) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk037" />
                                                    <label className="form-check-label" htmlFor="mailk037" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="mail-trash" role="tabpanel">
                                        <ul className="iq-email-sender-list">
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk028" />
                                                    <label className="form-check-label" htmlFor="mailk028" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Lauren Drury (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk033" />
                                                    <label className="form-check-label" htmlFor="mailk033" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Fabian Ros (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Let Hunre(@lethunre) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk038" />
                                                    <label className="form-check-label" htmlFor="mailk038" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="mail-important" role="tabpanel">
                                        <ul className="iq-email-sender-list">
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk029" />
                                                    <label className="form-check-label" htmlFor="mailk029" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Jopour Xiong (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk034" />
                                                    <label className="form-check-label" htmlFor="mailk034" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Deray Billings (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li className="iq-unread">
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk035" />
                                                    <label className="form-check-label" htmlFor="mailk035" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle text-warning" />
                                                <a href="#" className="iq-email-title">Lauren Drury (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Let Hunre (@lethunre) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk009" />
                                                    <label className="form-check-label" htmlFor="mailk009" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Fabian Ros (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk010" />
                                                    <label className="form-check-label" htmlFor="mailk010" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk016" />
                                                    <label className="form-check-label" htmlFor="mailk016" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Megan Allen (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane fade" id="mail-spam" role="tabpanel">
                                        <ul className="iq-email-sender-list">
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk021" />
                                                    <label className="form-check-label" htmlFor="mailk021" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Jopour Xiong (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Mackenzie Bnio (@mackenzieBnio) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk023" />
                                                    <label className="form-check-label" htmlFor="mailk023" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Deray Billings (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg(@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk030" />
                                                    <label className="form-check-label" htmlFor="mailk030" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Lauren Drury (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk031" />
                                                    <label className="form-check-label" htmlFor="mailk031" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Fabian Ros (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Let Hunre(@lethunre) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk036" />
                                                    <label className="form-check-label" htmlFor="mailk036" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Dixa Horton (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Eb Begg (@ebbegg) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-self-center iq-unread-inner">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="mailk040" />
                                                    <label className="form-check-label" htmlFor="mailk040" />
                                                </div>
                                                </div>
                                                <span className="ri-star-line iq-star-toggle" />
                                                <a href="#" className="iq-email-title">Megan Allen (Me)</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href="#" className="iq-email-subject">Jecno Mac (@jecnomac) has sent
                                                you a direct message on Twitter! &nbsp;–&nbsp;
                                                <span>@LucasKriebel - Very cool :) Nicklas, You have a new direct message.</span>
                                                </a>
                                                <div className="iq-email-date">11:49 am</div>
                                            </div>
                                            <ul className="iq-social-media list-inline">
                                                <li><a href="#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div id="compose-email-popup" className="compose-popup modal modal-sticky-bottom-right modal-sticky-lg">
                            <div className="card iq-border-radius-20 mb-0">
                            <div className="card-body">
                                <div className="row align-items-center">
                                <div className="col-md-12 mb-3">
                                    <h5 className="text-primary float-left"><i className="ri-pencil-fill" /> Compose Message</h5>
                                    <button type="submit" className="close-popup" data-dismiss="modal"><i className="ri-close-fill" /></button>
                                </div>
                                </div>
                                <form className="email-form">
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">To:</label>
                                    <div className="col-sm-10">
                                    <select id="inputEmail3" className="select2jsMultiSelect form-control" multiple="multiple">
                                        <option value="Petey Cruiser">Petey Cruiser</option>
                                        <option value="Bob Frapples">Bob Frapples</option>
                                        <option value="Barb Ackue">Barb Ackue</option>
                                        <option value="Greta Life">Greta Life</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="cc" className="col-sm-2 col-form-label">Cc:</label>
                                    <div className="col-sm-10">
                                    <select id="cc" className="select2jsMultiSelect form-control" multiple="multiple">
                                        <option value="Brock Lee">Brock Lee</option>
                                        <option value="Rick O'Shea">Rick O'Shea</option>
                                        <option value="Cliff Hanger">Cliff Hanger</option>
                                        <option value="Barb Dwyer">Barb Dwyer</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="subject" className="col-sm-2 col-form-label">Subject:</label>
                                    <div className="col-sm-10">
                                    <input type="text" id="subject" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="subject" className="col-sm-2 col-form-label">Your Message:</label>
                                    <div className="col-md-10">
                                    <textarea className="textarea form-control" rows={5} defaultValue={"Next, use our Get Started docs to setup Tiny!"} />
                                    </div>
                                </div>
                                <div className="form-group row align-items-center compose-bottom pt-3 m-0">
                                    <div className="d-flex flex-grow-1 align-items-center">
                                    <div className="send-btn">
                                        <button type="submit" className="btn btn-primary">Send</button>
                                    </div>
                                    <div className="send-panel">
                                        <label className="ms-2 mb-0 soft-bg-primary rounded" htmlFor="file"> <input type="file" id="file" style={{display: 'none'}} /> <a><i className="ri-attachment-line" /> </a> </label>
                                        <label className="ms-2 mb-0 soft-bg-primary rounded"> <a href="javascript:void();"> <i className="ri-map-pin-user-line text-primary" /></a></label>
                                        <label className="ms-2 mb-0 soft-bg-primary rounded"> <a href="javascript:void();"> <i className="ri-drive-line text-primary" /></a></label>
                                        <label className="ms-2 mb-0 soft-bg-primary rounded"> <a href="javascript:void();"> <i className="ri-camera-line text-primary" /></a></label>
                                        <label className="ms-2 mb-0 soft-bg-primary rounded"> <a href="javascript:void();"> <i className="ri-user-smile-line text-primary" /></a></label>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                    <div className="send-panel">
                                        <label className="ms-2 mb-0 soft-bg-primary rounded"><a href="javascript:void();"><i className="ri-settings-2-line text-primary" /></a></label>
                                        <label className="ms-2 mb-0 soft-bg-primary rounded"><a href="javascript:void();"><i className="ri-delete-bin-line text-primary" /></a></label>
                                    </div>
                                    </div>
                                </div>
                                </form>
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

export default Email

