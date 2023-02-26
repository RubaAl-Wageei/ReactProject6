import React from 'react'

const GroupDetails = () => {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>SocialV | Responsive Bootstrap 5 Admin Dashboard Template</title>
          
            <div className="wrapper">
                <div id="content-page" className="content-page">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                        <div className="group-info d-flex align-items-center">
                            <div className="me-3">
                            <img className="rounded-circle img-fluid avatar-100" src="/images/page-img/gi-1.jpg" alt="" />
                            </div>
                            <div className="info">
                            <h4>Developer's...</h4>
                            <p className="mb-0"><i className="ri-lock-fill pe-2" />Private Group . 323 members</p>
                            </div>
                        </div>
                        <div className="group-member d-flex align-items-center  mt-md-0 mt-2">
                            <div className="iq-media-group me-3">
                            <a href="#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/images/user/05.jpg" alt="" />
                            </a>
                            <a href="#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/images/user/06.jpg" alt="" />
                            </a>
                            <a href="#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/images/user/07.jpg" alt="" />
                            </a>
                            <a href="#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/images/user/08.jpg" alt="" />
                            </a>
                            <a href="#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/images/user/09.jpg" alt="" />
                            </a>
                            <a href="#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/images/user/10.jpg" alt="" />
                            </a>
                            <a href="#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/images/user/11.jpg" alt="" />
                            </a>
                            <a href="#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/images/user/12.jpg" alt="" />
                            </a>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2"><i className="ri-add-line me-1" />Invite</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div id="post-modal-data" className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                            <h4 className="card-title">Create Post</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                            <div className="user-img">
                                <img src="/images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle" />
                            </div>
                            <form className="post-text ms-3 w-100 " data-bs-toggle="modal" data-bs-target="#post-modal" action="javascript:void();">
                                <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: 'none'}} />
                            </form>
                            </div>
                            <hr />
                            <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                            <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src="/images/small/07.png" alt="icon" className="img-fluid me-2" /> Photo/Video</li>
                            <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img src="/images/small/08.png" alt="icon" className="img-fluid me-2" /> Tag Friend</li>
                            <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3"><img src="/images/small/09.png" alt="icon" className="img-fluid me-2" /> Feeling/Activity</li>
                            <li className="bg-soft-primary rounded p-2 pointer text-center">
                                <div className="card-header-toolbar d-flex align-items-center">
                                <div className="dropdown">
                                    <div className="dropdown-toggle" id="post-option" data-bs-toggle="dropdown">
                                    <i className="ri-more-fill h4" />
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="post-option" style={{}}>
                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Check in</a>
                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Live Video</a>
                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Gif</a>
                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Watch Party</a>
                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Play with Friend</a>
                                    </div>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        <div className="modal fade" id="post-modal" tabIndex={-1} aria-labelledby="post-modalLabel" aria-hidden="true">
                            <div className="modal-dialog   modal-fullscreen-sm-down">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="ri-close-fill" /></button>
                                </div>
                                <div className="modal-body">
                                <div className="d-flex align-items-center">
                                    <div className="user-img">
                                    <img src="/images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle img-fluid" />
                                    </div>
                                    <form className="post-text ms-3 w-100" action="javascript:void();">
                                    <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: 'none'}} />
                                    </form>
                                </div>
                                <hr />
                                <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="/images/small/07.png" alt="icon" className="img-fluid" /> Photo/Video</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="/images/small/08.png" alt="icon" className="img-fluid" /> Tag Friend</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="/images/small/09.png" alt="icon" className="img-fluid" /> Feeling/Activity</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="/images/small/10.png" alt="icon" className="img-fluid" /> Check in</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="/images/small/11.png" alt="icon" className="img-fluid" /> Live Video</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="/images/small/12.png" alt="icon" className="img-fluid" /> Gif</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="/images/small/13.png" alt="icon" className="img-fluid" /> Watch Party</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="/images/small/14.png" alt="icon" className="img-fluid" /> Play with Friends</div>
                                    </li>
                                </ul>
                                <hr />
                                <div className="other-option">
                                    <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="user-img me-3">
                                        <img src="/images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle img-fluid" />
                                        </div>
                                        <h6>Your Story</h6>
                                    </div>
                                    <div className="card-post-toolbar">
                                        <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <span className="btn btn-primary">Friend</span>
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-save-line h4" />
                                                <div className="data ms-2">
                                                <h6>Public</h6>
                                                <p className="mb-0">Anyone on or off Facebook</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-close-circle-line h4" />
                                                <div className="data ms-2">
                                                <h6>Friends</h6>
                                                <p className="mb-0">Your Friend on facebook</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-user-unfollow-line h4" />
                                                <div className="data ms-2">
                                                <h6>Friends except</h6>
                                                <p className="mb-0">Don't show to some friends</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-notification-line h4" />
                                                <div className="data ms-2">
                                                <h6>Only Me</h6>
                                                <p className="mb-0">Only me</p>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary d-block w-100 mt-3">Post</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-body">
                            <div className="post-item">
                            <div className="user-post-data py-3">
                                <div className="d-flex justify-content-between">
                                <div className=" me-3">
                                    <img className="rounded-circle img-fluid" src="/images/user/04.jpg" alt="" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                    <div className>
                                        <h5 className="mb-0 d-inline-block"><a href="#" className>Paige Turner</a></h5>
                                        <p className="mb-0">8 hour ago</p>
                                    </div>
                                    <div className="card-post-toolbar">
                                        <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-save-line h4" />
                                                <div className="data ms-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-pencil-line h4" />
                                                <div className="data ms-2">
                                                <h6>Edit Post</h6>
                                                <p className="mb-0">Update your post and saved items</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-close-circle-line h4" />
                                                <div className="data ms-2">
                                                <h6>Hide From Timeline</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-delete-bin-7-line h4" />
                                                <div className="data ms-2">
                                                <h6>Delete</h6>
                                                <p className="mb-0">Remove thids Post on Timeline</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-notification-line h4" />
                                                <div className="data ms-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">Turn on notifications for this post</p>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="user-post">
                                <a href="javascript:void();"><img src="/images/page-img/52.jpg" alt="post-image" className="img-fluid w-100" /></a>
                            </div>
                            <div className="comment-area mt-3">
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="like-block position-relative d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                    <div className="like-data">
                                        <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <img src="/images/icon/01.png" className="img-fluid" alt="" />
                                        </span>
                                        <div className="dropdown-menu py-2">
                                            <a className="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="/images/icon/01.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="/images/icon/02.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="/images/icon/03.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="/images/icon/04.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="/images/icon/05.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sade"><img src="/images/icon/06.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="/images/icon/07.png" className="img-fluid" alt="" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="total-like-block ms-2 me-3">
                                        <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            140 Likes
                                        </span>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Max Emum</a>
                                            <a className="dropdown-item" href="#">Bill Yerds</a>
                                            <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                            <a className="dropdown-item" href="#">Tara Misu</a>
                                            <a className="dropdown-item" href="#">Midge Itz</a>
                                            <a className="dropdown-item" href="#">Sal Vidge</a>
                                            <a className="dropdown-item" href="#">Other</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="total-comment-block">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                        </span>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                    <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><i className="ri-share-line" />
                                    <span className="ms-1">99 Share</span></a>
                                </div>
                                </div>
                                <hr />
                                <ul className="post-comments p-0 m-0">
                                <li className="mb-2">
                                    <div className="d-flex">
                                    <div className="user-img">
                                        <img src="/images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                    <div className="user-img">
                                        <img src="/images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                                <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                                <div className="comment-attagement d-flex">
                                    <a href="javascript:void();"><i className="ri-link me-3" /></a>
                                    <a href="javascript:void();"><i className="ri-user-smile-line me-3" /></a>
                                    <a href="javascript:void();"><i className="ri-camera-line me-3" /></a>
                                </div>
                                </form>
                            </div>
                            </div>
                            <div className="post-item">
                            <div className="user-post-data py-3">
                                <div className="d-flex justify-content-between">
                                <div className="media-support-user-img me-3">
                                    <img className="rounded-circle img-fluid" src="/images/user/01.jpg" alt="" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                    <div className>
                                        <h5 className="mb-0 d-inline-block me-1"><a href="#" className>Pete Sariya</a></h5>
                                        <p className=" mb-0 d-inline-block">Update his Status</p>
                                        <p className="mb-0">7 hour ago</p>
                                    </div>
                                    <div className="card-post-toolbar">
                                        <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-save-line h4" />
                                                <div className="data ms-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-pencil-line h4" />
                                                <div className="data ms-2">
                                                <h6>Edit Post</h6>
                                                <p className="mb-0">Update your post and saved items</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-close-circle-line h4" />
                                                <div className="data ms-2">
                                                <h6>Hide From Timeline</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-delete-bin-7-line h4" />
                                                <div className="data ms-2">
                                                <h6>Delete</h6>
                                                <p className="mb-0">Remove thids Post on Timeline</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-notification-line h4" />
                                                <div className="data ms-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">Turn on notifications for this post</p>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="user-post">
                                <a href="javascript:void();"><img src="/images/page-img/60.jpg" alt="post-image" className="img-fluid w-100" /></a>
                            </div>
                            <div className="comment-area mt-3">
                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="like-block position-relative d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                    <div className="like-data">
                                        <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <img src="/images/icon/01.png" className="img-fluid" alt="" />
                                        </span>
                                        <div className="dropdown-menu py-2">
                                            <a className="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="/images/icon/01.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="/images/icon/02.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="/images/icon/03.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="/images/icon/04.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="/images/icon/05.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sade"><img src="/images/icon/06.png" className="img-fluid" alt="" /></a>
                                            <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="/images/icon/07.png" className="img-fluid" alt="" /></a>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="total-like-block ms-2 me-3">
                                        <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            140 Likes
                                        </span>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Max Emum</a>
                                            <a className="dropdown-item" href="#">Bill Yerds</a>
                                            <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                            <a className="dropdown-item" href="#">Tara Misu</a>
                                            <a className="dropdown-item" href="#">Midge Itz</a>
                                            <a className="dropdown-item" href="#">Sal Vidge</a>
                                            <a className="dropdown-item" href="#">Other</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="total-comment-block">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                        </span>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0 ">
                                    <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><i className="ri-share-line" />
                                    <span className="ms-1">99 Share</span></a>
                                </div>
                                </div>
                                <hr />
                                <ul className="post-comments p-0 m-0">
                                <li className="mb-2">
                                    <div className="d-flex ">
                                    <div className="user-img">
                                        <img src="/images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex ">
                                    <div className="user-img">
                                        <img src="/images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                </ul>
                                <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                                <div className="comment-attagement d-flex">
                                    <a href="javascript:void();"><i className="ri-link me-3" /></a>
                                    <a href="javascript:void();"><i className="ri-user-smile-line me-3" /></a>
                                    <a href="javascript:void();"><i className="ri-camera-line me-3" /></a>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                            <h4 className="card-title">Groups</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-inline p-0 m-0">
                            <li className="mb-3 pb-3 border-bottom">
                                <div className="iq-search-bar members-search p-0">
                                <form action="#" className="searchbox w-auto">
                                    <input type="text" className="text search-input bg-grey" placeholder="Type here to search..." />
                                    <a className="search-link" href="#"><i className="ri-search-line" /></a>
                                </form>
                                </div>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <div className="avatar-40 rounded-circle bg-gray text-center me-3"><i className="ri-bank-card-line h4" /></div>
                                <h6 className="mb-0">Your Feed</h6>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <div className="avatar-40 rounded-circle bg-gray text-center me-3"><i className="ri-compass-3-line h4" /></div>
                                <h6 className="mb-0">Discover</h6>
                            </li>
                            <li>
                                <button type="submit" className="btn btn-primary d-block w-100"><i className="ri-add-line pe-2" />Create New Group</button>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                            <h4 className="card-title">About</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-inline p-0 m-0">
                            <li className="mb-3">
                                <p className="mb-0">Developer's Group...</p>
                            </li>
                            <li className="mb-3">
                                <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <i className="ri-lock-fill h4" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h6>Private</h6>
                                    <p className="mb-0">Success in slowing economic activity.</p>
                                </div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <i className="ri-eye-fill h4" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h6>Visible</h6>
                                    <p className="mb-0">Various versions have evolved over the years</p>
                                </div>
                                </div>
                            </li>
                            <li className>
                                <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <i className="ri-group-fill h4" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h6>General group</h6>
                                    <p className="mb-0">There are many variations of passages</p>
                                </div>
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
            
        </div>
      );
}

export default GroupDetails
