import React from 'react'

const ProfileForum = () => {
    return (
        <div>
            <div className="wrapper">
                <div id="content-page" className="content-page">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                        <div className="card-body profile-page p-0">
                            <div className="profile-header">
                            <div className="position-relative">
                                <img src="/images/page-img/profile-bg1.jpg" alt="profile-bg" className="rounded img-fluid" />
                                <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                                <li><a href="#"><i className="ri-pencil-line" /></a></li>
                                <li><a href="#"><i className="ri-settings-4-line" /></a></li>
                                </ul>
                            </div>
                            <div className="user-detail text-center mb-3">
                                <div className="profile-img">
                                <img src="/images/user/11.png" alt="profile-img" className="avatar-130 img-fluid" />
                                </div>
                                <div className="profile-detail">
                                <h3 className>Paul Molive</h3>
                                </div>
                            </div>
                            <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                                <div className="social-links">
                                <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                                    <li className="text-center pe-3">
                                    <a href="#"><img src="/images/icon/08.png" className="img-fluid rounded" alt="facebook" /></a>
                                    </li>
                                    <li className="text-center pe-3">
                                    <a href="#"><img src="/images/icon/09.png" className="img-fluid rounded" alt="Twitter" /></a>
                                    </li>
                                    <li className="text-center pe-3">
                                    <a href="#"><img src="/images/icon/10.png" className="img-fluid rounded" alt="Instagram" /></a>
                                    </li>
                                    <li className="text-center pe-3">
                                    <a href="#"><img src="/images/icon/11.png" className="img-fluid rounded" alt="Google plus" /></a>
                                    </li>
                                    <li className="text-center pe-3">
                                    <a href="#"><img src="/images/icon/12.png" className="img-fluid rounded" alt="You tube" /></a>
                                    </li>
                                    <li className="text-center pe-0 md-pe-3">
                                    <a href="#"><img src="/images/icon/13.png" className="img-fluid rounded" alt="linkedin" /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="social-info">
                                <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                                    <li className="text-center ps-3">
                                    <h6>Posts</h6>
                                    <p className="mb-0">690</p>
                                    </li>
                                    <li className="text-center ps-3">
                                    <h6>Followers</h6>
                                    <p className="mb-0">206</p>
                                    </li>
                                    <li className="text-center ps-3">
                                    <h6>Following</h6>
                                    <p className="mb-0">100</p>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                        <div className="card-body p-0">
                            <div className="user-tabing p-3">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <ul className="nav nav-pills d-flex align-items-center text-center profile-forum-items p-0 m-0 w-75">
                                <li className="col-sm-3 p-0">
                                    <a className="nav-link active" data-bs-toggle="pill" href="#pill-topicstart-tab" data-bs-target="#topicstart" role="button">Topic Started</a>
                                </li>
                                <li className="col-sm-3 p-0">
                                    <a className="nav-link" data-bs-toggle="pill" href="#pill-replies-tab" data-bs-target="#replies" role="button">My Replies</a>
                                </li>
                                <li className="col-sm-3 p-0">
                                    <a className="nav-link" data-bs-toggle="pill" href="#pill-likedtopic-tab" data-bs-target="#likedtopic" role="button">Liked Topics</a>
                                </li>
                                </ul>
                                <button type="submit" className="btn btn-primary">Apply Filter</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12">                        
                        <div className="tab-content forum-content">
                        <div className="tab-pane fade active show" id="topicstart" role="tabpanel"> 
                            <div className="card"> 
                            <div className="card-body">
                                <div className="table-responsive">
                                <table className="table table-striped mb-0">
                                    <thead>
                                    <tr>
                                        <th>Activity</th>
                                        <th>Voices</th>
                                        <th>Replies</th>
                                        <th>Discussion</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/01.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Bearded Wonder</a></h6>
                                            <p className="mb-0">3 hours, 22 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">12</td>
                                        <td className="col-lg-2">3</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/02.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Anna Mull</a></h6>
                                            <p className="mb-0">3 hours, 20 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">10</td>
                                        <td className="col-lg-2">8</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Anna Mull</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/03.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Terry Aki</a></h6>
                                            <p className="mb-0">3 hours, 18 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">8</td>
                                        <td className="col-lg-2">8</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Terry Aki</span>18 minutes ago <span className="text-primary">- Community</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/04.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Alex john</a></h6>
                                            <p className="mb-0">2 hours, 16 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">7</td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Alex john</span>16 minutes ago <span className="text-primary"> - expenses</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/05.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Rock lai</a></h6>
                                            <p className="mb-0">2 hours, 22 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Rock lai</span>22 minutes ago <span className="text-primary"> - Banking</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/06.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                                            <p className="mb-0">2 hours, 21 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">5</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Ira Membrit</span>21 minutes ago <span className="text-primary"> - expenses</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/07.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Bob Frapples</a></h6>
                                            <p className="mb-0">2 hours, 20 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-2">2</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Bob Frapples</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/08.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Paul Moliver</a></h6>
                                            <p className="mb-0">2 hours, 18 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">5</td>
                                        <td className="col-lg-2">3</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Paul Molive</span>18 minutes ago <span className="text-primary"> - Banking</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/09.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                                            <p className="mb-0">2 hours, 15 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Greta Life</span>15 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/05.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Bearded Wonder</a></h6>
                                            <p className="mb-0">3 hours, 22 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">3</td>
                                        <td className="col-lg-2">2</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div> 
                            </div>
                        </div>
                        <div className="tab-pane fade" id="replies" role="tabpanel"> 
                            <div className="card"> 
                            <div className="card-body">
                                <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Activity</th>
                                        <th>Voices</th>
                                        <th>Replies</th>
                                        <th>Discussion</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/07.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Bob Frapples</a></h6>
                                            <p className="mb-0">2 hours, 20 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-2">2</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Bob Frapples</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/08.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Paul Moliver</a></h6>
                                            <p className="mb-0">2 hours, 18 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">5</td>
                                        <td className="col-lg-2">3</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Paul Molive</span>18 minutes ago <span className="text-primary"> - Banking</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/01.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Bearded Wonder</a></h6>
                                            <p className="mb-0">3 hours, 22 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">12</td>
                                        <td className="col-lg-2">3</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/02.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Anna Mull</a></h6>
                                            <p className="mb-0">3 hours, 20 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">10</td>
                                        <td className="col-lg-2">8</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Anna Mull</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/03.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Terry Aki</a></h6>
                                            <p className="mb-0">3 hours, 18 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">8</td>
                                        <td className="col-lg-2">8</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Terry Aki</span>18 minutes ago <span className="text-primary">- Community</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/04.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Alex john</a></h6>
                                            <p className="mb-0">2 hours, 16 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">7</td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Alex john</span>16 minutes ago <span className="text-primary"> - expenses</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/05.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Rock lai</a></h6>
                                            <p className="mb-0">2 hours, 22 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Rock lai</span>22 minutes ago <span className="text-primary"> - Banking</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/06.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                                            <p className="mb-0">2 hours, 21 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">5</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Ira Membrit</span>21 minutes ago <span className="text-primary"> - expenses</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/09.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                                            <p className="mb-0">2 hours, 15 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Greta Life</span>15 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/05.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Bearded Wonder</a></h6>
                                            <p className="mb-0">3 hours, 22 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">3</td>
                                        <td className="col-lg-2">2</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="likedtopic" role="tabpanel"> 
                            <div className="card"> 
                            <diiv className="card-body">
                                <div className="table-responsive-lg">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Activity</th>
                                        <th>Voices</th>
                                        <th>Replies</th>
                                        <th>Discussion</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/09.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                                            <p className="mb-0">2 hours, 15 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Greta Life</span>15 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/04.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Alex john</a></h6>
                                            <p className="mb-0">2 hours, 16 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">7</td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Alex john</span>16 minutes ago <span className="text-primary"> - expenses</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/01.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Bearded Wonder</a></h6>
                                            <p className="mb-0">3 hours, 22 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">12</td>
                                        <td className="col-lg-2">3</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/02.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Anna Mull</a></h6>
                                            <p className="mb-0">3 hours, 20 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">10</td>
                                        <td className="col-lg-2">8</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Anna Mull</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/03.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Terry Aki</a></h6>
                                            <p className="mb-0">3 hours, 18 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">8</td>
                                        <td className="col-lg-2">8</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Terry Aki</span>18 minutes ago <span className="text-primary">- Community</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/04.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Alex john</a></h6>
                                            <p className="mb-0">2 hours, 16 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">7</td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Alex john</span>16 minutes ago <span className="text-primary"> - expenses</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/05.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Rock lai</a></h6>
                                            <p className="mb-0">2 hours, 22 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Rock lai</span>22 minutes ago <span className="text-primary"> - Banking</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/06.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Ira Membrit</a></h6>
                                            <p className="mb-0">2 hours, 21 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">5</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Ira Membrit</span>21 minutes ago <span className="text-primary"> - expenses</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/07.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Bob Frapples</a></h6>
                                            <p className="mb-0">2 hours, 20 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-2">2</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Bob Frapples</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/08.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Paul Moliver</a></h6>
                                            <p className="mb-0">2 hours, 18 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">5</td>
                                        <td className="col-lg-2">3</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Paul Molive</span>18 minutes ago <span className="text-primary"> - Banking</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/09.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Greta Life</a></h6>
                                            <p className="mb-0">2 hours, 15 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">6</td>
                                        <td className="col-lg-2">4</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Greta Life</span>15 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <img className="img-fluid rounded-circle avatar-40" src="/images/user/05.jpg" alt="" />
                                            <div className="media-body ms-3">
                                            <h6 className="mb-0"><a href="#">Bearded Wonder</a></h6>
                                            <p className="mb-0">3 hours, 22 minutes ago</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="col-lg-2">3</td>
                                        <td className="col-lg-2">2</td>
                                        <td className="col-lg-4">
                                        <h6>There are many variations of passages.</h6>
                                        <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </diiv>
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

export default ProfileForum
