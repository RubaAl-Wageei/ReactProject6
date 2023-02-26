import React from 'react'

const Index = () => {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Posts</title>
          
            <div className="wrapper">
                <div id="content-page" className="content-page">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8 row m-0 p-0">
                            <div className="col-sm-12">
                            <div id="post-modal-data" className="card card-block card-stretch card-height">
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
                                    <li className="me-3 mb-md-0 mb-2">
                                    <a href="#" className="btn btn-soft-primary">
                                        <img src="/images/small/07.png" alt="icon" className="img-fluid me-2" /> Photo/Video
                                    </a>
                                    </li>
                                    <li className="me-3 mb-md-0 mb-2">
                                    <a href="#" className="btn btn-soft-primary">
                                        <img src="/images/small/08.png" alt="icon" className="img-fluid me-2" /> Tag Friend
                                    </a>
                                    </li>
                                    <li className="me-3">
                                    <a href="#" className="btn btn-soft-primary">
                                        <img src="/images/small/09.png" alt="icon" className="img-fluid me-2" /> Feeling/Activity
                                    </a>
                                    </li>
                                    <li>
                                    <button className="btn btn-soft-primary">
                                        <div className="card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                            <div className="dropdown-toggle" id="post-option" data-bs-toggle="dropdown">
                                            <i className="ri-more-fill" />
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
                                    </button>
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
                            </div>
                            <div className="col-sm-12">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                <div className="user-post-data">
                                    <div className="d-flex justify-content-between">
                                    <div className="me-3">
                                        <img className="rounded-circle img-fluid" src="/images/user/01.jpg" alt="" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                        <div className>
                                            <h5 className="mb-0 d-inline-block">Anna Sthesia</h5>
                                            <span className="mb-0 d-inline-block">Add New Post</span>
                                            <p className="mb-0 text-primary">Just Now</p>
                                        </div>
                                        <div className="card-post-toolbar">
                                            <div className="dropdown">
                                            <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                                <i className="ri-more-fill" />
                                            </span>
                                            <div className="dropdown-menu m-0 p-0">
                                                <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                    <div className="h4">
                                                    <i className="ri-save-line" />
                                                    </div>
                                                    <div className="data ms-2">
                                                    <h6>Save Post</h6>
                                                    <p className="mb-0">Add this to your saved items</p>
                                                    </div>
                                                </div>
                                                </a>
                                                <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                    <i className="ri-close-circle-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Hide Post</h6>
                                                    <p className="mb-0">See fewer posts like this.</p>
                                                    </div>
                                                </div>
                                                </a>
                                                <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                    <i className="ri-user-unfollow-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Unfollow User</h6>
                                                    <p className="mb-0">Stop seeing posts but stay friends.</p>
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
                                <div className="mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                </div>
                                <div className="user-post">
                                    <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                                    <div className="row-span-2 row-span-md-1">
                                        <img src="/images/page-img/p2.jpg" alt="post-image" className="img-fluid rounded w-100" />
                                    </div>
                                    <div className="row-span-1">
                                        <img src="/images/page-img/p1.jpg" alt="post-image" className="img-fluid rounded w-100" />
                                    </div>
                                    <div className="row-span-1 ">
                                        <img src="/images/page-img/p3.jpg" alt="post-image" className="img-fluid rounded w-100" />
                                    </div>
                                    </div>
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
                                    <ul className="post-comments list-inline p-0 m-0">
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
                            </div>
                            </div>
                            <div className="col-sm-12">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                <div className="user-post-data">
                                    <div className="d-flex justify-content-between">
                                    <div className="me-3">
                                        <img className="rounded-circle img-fluid" src="/images/user/03.jpg" alt="" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex  justify-content-between">
                                        <div className>
                                            <h5 className="mb-0 d-inline-block">Barb Ackue</h5>
                                            <span className="mb-0 d-inline-block">Added New Image in a Post</span>
                                            <p className="mb-0 text-primary">1 hour ago</p>
                                        </div>
                                        <div className="card-post-toolbar">
                                            <div className="dropdown">
                                            <span className="dropdown-toggle" id="postdata-5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                                <i className="ri-more-fill" />
                                            </span>
                                            <div className="dropdown-menu m-0 p-0" aria-labelledby="postdata-5">
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
                                                    <i className="ri-close-circle-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Hide Post</h6>
                                                    <p className="mb-0">See fewer posts like this.</p>
                                                    </div>
                                                </div>
                                                </a>
                                                <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                    <i className="ri-user-unfollow-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Unfollow User</h6>
                                                    <p className="mb-0">Stop seeing posts but stay friends.</p>
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
                                <div className="mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                </div>
                                <div className="user-post">
                                    <a href="javascript:void();"><img src="/images/page-img/p4.jpg" alt="post-image" className="img-fluid rounded w-100" /></a>
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
                                    <ul className="post-comments list-inline p-0 m-0">
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
                            <div className="col-sm-12">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                <div className="user-post-data">
                                    <div className="d-flex justify-content-between">
                                    <div className="me-3">
                                        <img className="rounded-circle img-fluid" src="/images/user/04.jpg" alt="" />
                                    </div>
                                    <div className="w-100">
                                        <div className=" d-flex  justify-content-between">
                                        <div className>
                                            <h5 className="mb-0 d-inline-block">Ira Membrit</h5>
                                            <p className="mb-0 d-inline-block">Update her Status</p>
                                            <p className="mb-0 text-primary">6 hour ago</p>
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
                                                    <i className="ri-close-circle-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Hide Post</h6>
                                                    <p className="mb-0">See fewer posts like this.</p>
                                                    </div>
                                                </div>
                                                </a>
                                                <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                    <i className="ri-user-unfollow-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Unfollow User</h6>
                                                    <p className="mb-0">Stop seeing posts but stay friends.</p>
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
                                <div className="mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
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
                                    <ul className="post-comments list-inline p-0 m-0">
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
                            <div className="col-sm-12">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                <div className="post-item">
                                    <div className="d-flex justify-content-between">
                                    <div className="me-3">
                                        <img className="rounded-circle img-fluid avatar-60" src="/images/user/1.jpg" alt="" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                        <div className>
                                            <h5 className="mb-0 d-inline-block">Bni Cyst</h5>
                                            <p className="ms-1 mb-0 d-inline-block">Changed Profile Picture</p>
                                            <p className="mb-0">3 day ago</p>
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
                                                    <i className="ri-close-circle-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Hide Post</h6>
                                                    <p className="mb-0">See fewer posts like this.</p>
                                                    </div>
                                                </div>
                                                </a>
                                                <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                    <i className="ri-user-unfollow-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Unfollow User</h6>
                                                    <p className="mb-0">Stop seeing posts but stay friends.</p>
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
                                <div className="user-post text-center">
                                    <a href="javascript:void();"><img src="/images/page-img/p5.jpg" alt="post-image" className="img-fluid rounded w-100 mt-3" /></a>
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
                                    <ul className="post-comments list-inline p-0 m-0">
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
                            </div>
                            </div>
                            <div className="col-sm-12">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                <div className="user-post-data">
                                    <div className="d-flex justify-content-between">
                                    <div className="me-3">
                                        <img className="rounded-circle img-fluid" src="/images/user/02.jpg" alt="" />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between">
                                        <div className>
                                            <h5 className="mb-0 d-inline-block">Paige Turner</h5>
                                            <p className="mb-0 d-inline-block">Added New Video in his Timeline</p>
                                            <p className="mb-0 text-primary">1 day ago</p>
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
                                                    <i className="ri-close-circle-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Hide Post</h6>
                                                    <p className="mb-0">See fewer posts like this.</p>
                                                    </div>
                                                </div>
                                                </a>
                                                <a className="dropdown-item p-3" href="#">
                                                <div className="d-flex align-items-top">
                                                    <i className="ri-user-unfollow-line h4" />
                                                    <div className="data ms-2">
                                                    <h6>Unfollow User</h6>
                                                    <p className="mb-0">Stop seeing posts but stay friends.</p>
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
                                <div className="mt-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                                </div>
                                <div className="user-post">
                                    <div className="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/j_GsIanLxZk?rel=0" allowFullScreen />
                                    </div>
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
                                    <ul className="post-comments list-inline p-0 m-0">
                                    <li className="mb-2">
                                        <div className="d-flex flex-wrap">
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
                                        <div className="d-flex flex-wrap">
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
                                <h4 className="card-title">Stories</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="media-story list-inline m-0 p-0">
                                <li className="d-flex mb-3 align-items-center">
                                    <i className="ri-add-line" />
                                    <div className="stories-data ms-3">
                                    <h5>Creat Your Story</h5>
                                    <p className="mb-0">time to story</p>
                                    </div>
                                </li>
                                <li className="d-flex mb-3 align-items-center active">
                                    <img src="/images/page-img/s2.jpg" alt="story-img" className="rounded-circle img-fluid" />
                                    <div className="stories-data ms-3">
                                    <h5>Anna Mull</h5>
                                    <p className="mb-0">1 hour ago</p>
                                    </div>
                                </li>
                                <li className="d-flex mb-3 align-items-center">
                                    <img src="/images/page-img/s3.jpg" alt="story-img" className="rounded-circle img-fluid" />
                                    <div className="stories-data ms-3">
                                    <h5>Ira Membrit</h5>
                                    <p className="mb-0">4 hour ago</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src="/images/page-img/s1.jpg" alt="story-img" className="rounded-circle img-fluid" />
                                    <div className="stories-data ms-3">
                                    <h5>Bob Frapples</h5>
                                    <p className="mb-0">9 hour ago</p>
                                    </div>
                                </li>
                                </ul>
                                <a href="#" className="btn btn-primary d-block mt-3">See All</a>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                <h4 className="card-title">Events</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                <div className="dropdown">
                                    <div className="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                    <i className="ri-more-fill h4" />
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{}}>
                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill me-2" />View</a>
                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill me-2" />Delete</a>
                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill me-2" />Edit</a>
                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill me-2" />Print</a>
                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill me-2" />Download</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="media-story list-inline m-0 p-0">
                                <li className="d-flex mb-4 align-items-center ">
                                    <img src="/images/page-img/s4.jpg" alt="story-img" className="rounded-circle img-fluid" />
                                    <div className="stories-data ms-3">
                                    <h5>Web Workshop</h5>
                                    <p className="mb-0">1 hour ago</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src="/images/page-img/s5.jpg" alt="story-img" className="rounded-circle img-fluid" />
                                    <div className="stories-data ms-3">
                                    <h5>Fun Events and Festivals</h5>
                                    <p className="mb-0">1 hour ago</p>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                <h4 className="card-title">Upcoming Birthday</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="media-story list-inline m-0 p-0">
                                <li className="d-flex mb-4 align-items-center">
                                    <img src="/images/user/01.jpg" alt="story-img" className="rounded-circle img-fluid" />
                                    <div className="stories-data ms-3">
                                    <h5>Anna Sthesia</h5>
                                    <p className="mb-0">Today</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <img src="/images/user/02.jpg" alt="story-img" className="rounded-circle img-fluid" />
                                    <div className="stories-data ms-3">
                                    <h5>Paul Molive</h5>
                                    <p className="mb-0">Tomorrow</p>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                <h4 className="card-title">Suggested Pages</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                <div className="dropdown">
                                    <div className="dropdown-toggle" id="dropdownMenuButton01" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                    <i className="ri-more-fill h4" />
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill me-2" />View</a>
                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill me-2" />Delete</a>
                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill me-2" />Edit</a>
                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill me-2" />Print</a>
                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill me-2" />Download</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="suggested-page-story m-0 p-0 list-inline">
                                <li className="mb-3">
                                    <div className="d-flex align-items-center mb-3">
                                    <img src="/images/page-img/42.png" alt="story-img" className="rounded-circle img-fluid avatar-50" />
                                    <div className="stories-data ms-3">
                                        <h5>Iqonic Studio</h5>
                                        <p className="mb-0">Lorem Ipsum</p>
                                    </div>
                                    </div>
                                    <img src="/images/small/img-1.jpg" className="img-fluid rounded" alt="Responsive image" />
                                    <div className="mt-3"><a href="#" className="btn d-block"><i className="ri-thumb-up-line me-2" /> Like Page</a></div>
                                </li>
                                <li className>
                                    <div className="d-flex align-items-center mb-3">
                                    <img src="/images/page-img/42.png" alt="story-img" className="rounded-circle img-fluid avatar-50" />
                                    <div className="stories-data ms-3">
                                        <h5>Cakes &amp; Bakes </h5>
                                        <p className="mb-0">Lorem Ipsum</p>
                                    </div>
                                    </div>
                                    <img src="/images/small/img-2.jpg" className="img-fluid rounded" alt="Responsive image" />
                                    <div className="mt-3"><a href="#" className="btn d-block"><i className="ri-thumb-up-line me-2" /> Like Page</a></div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 text-center">
                            <img src="/images/page-img/page-load-loader.gif" alt="loader" style={{height: '100px'}} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Index


