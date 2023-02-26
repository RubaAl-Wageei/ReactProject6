import React from 'react'

const EditProfile = () => {
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
                        <div className="card">
                        <div className="card-body p-0">
                            <div className="iq-edit-list">
                            <ul className="iq-edit-profile row nav nav-pills">
                                <li className="col-md-3 p-0">
                                <a className="nav-link active" data-bs-toggle="pill" href="#personal-information">
                                    Personal Information
                                </a>
                                </li>
                                <li className="col-md-3 p-0">
                                <a className="nav-link" data-bs-toggle="pill" href="#chang-pwd">
                                    Change Password
                                </a>
                                </li>
                                <li className="col-md-3 p-0">
                                <a className="nav-link" data-bs-toggle="pill" href="#emailandsms">
                                    Email and SMS
                                </a>
                                </li>
                                <li className="col-md-3 p-0">
                                <a className="nav-link" data-bs-toggle="pill" href="#manage-contact">
                                    Manage Contact
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="iq-edit-list-data">
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="personal-information" role="tabpanel">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Personal Information</h4>
                                </div>
                                </div>
                                <div className="card-body">
                                <form>
                                    <div className="form-group row align-items-center">
                                    <div className="col-md-12">
                                        <div className="profile-img-edit">
                                        <img className="profile-pic" src="/images/user/11.png" alt="profile-pic" />
                                        <div className="p-image">
                                            <i className="ri-pencil-line upload-button text-white" />
                                            <input className="file-upload" type="file" accept="image/*" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className=" row align-items-center">
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="fname" className="form-label">First Name:</label>
                                        <input type="text" className="form-control" id="fname" placeholder="Bni" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="lname" className="form-label">Last Name:</label>
                                        <input type="text" className="form-control" id="lname" placeholder="Jhon" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="uname" className="form-label">User Name:</label>
                                        <input type="text" className="form-control" id="uname" placeholder="Bni@01" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="cname" className="form-label">City:</label>
                                        <input type="text" className="form-control" id="cname" placeholder="Atlanta" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label className="form-label d-block">Gender:</label>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" defaultValue="option1" />
                                        <label className="form-check-label" htmlFor="inlineRadio10"> Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio11" defaultValue="option1" />
                                        <label className="form-check-label" htmlFor="inlineRadio11">Female</label>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="dob" className="form-label">Date Of Birth:</label>
                                        <input className="form-control" id="dob" placeholder="1984-01-24" />
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label className="form-label">Marital Status:</label>
                                        <select className="form-select" aria-label="Default select example">
                                        <option selected>Single</option>
                                        <option>Married</option>
                                        <option>Widowed</option>
                                        <option>Divorced</option>
                                        <option>Separated </option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label className="form-label">Age:</label>
                                        <select className="form-select" aria-label="Default select example 2">
                                        <option>46-62</option>
                                        <option>63 &gt; </option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label className="form-label">Country:</label>
                                        <select className="form-select" aria-label="Default select example 3">
                                        <option>Caneda</option>
                                        <option>Noida</option>
                                        <option selected>USA</option>
                                        <option>India</option>
                                        <option>Africa</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label className="form-label">State:</label>
                                        <select className="form-select" aria-label="Default select example 4">
                                        <option>California</option>
                                        <option>Florida</option>
                                        <option selected>Georgia</option>
                                        <option>Connecticut</option>
                                        <option>Louisiana</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label className="form-label">Address:</label>
                                        <textarea className="form-control" name="address" rows={5} style={{lineHeight: '22px'}} defaultValue={"                                                37 Cardinal Lane\n                                                Petersburg, VA 23803\n                                                United States of America\n                                                Zip Code: 85001\n                                                "} />
                                    </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                                    <button type="reset" className="btn bg-soft-danger">Cancle</button>
                                </form>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="chang-pwd" role="tabpanel">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Change Password</h4>
                                </div>
                                </div>
                                <div className="card-body">
                                <form>
                                    <div className="form-group">
                                    <label htmlFor="cpass" className="form-label">Current Password:</label>
                                    <a href="#" className="float-end">Forgot Password</a>
                                    <input type="Password" className="form-control" id="cpass" defaultValue />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="npass" className="form-label">New Password:</label>
                                    <input type="Password" className="form-control" id="npass" defaultValue />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="vpass" className="form-label">Verify Password:</label>
                                    <input type="Password" className="form-control" id="vpass" defaultValue />
                                    </div>
                                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                                    <button type="reset" className="btn bg-soft-danger">Cancle</button>
                                </form>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="emailandsms" role="tabpanel">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Email and SMS</h4>
                                </div>
                                </div>
                                <div className="card-body">
                                <form>
                                    <div className="form-group row align-items-center">
                                    <label className="col-md-3" htmlFor="emailnotification">Email Notification:</label>
                                    <div className="col-md-9 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked11" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked11">Checked switch checkbox input</label>
                                    </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                    <label className="col-md-3" htmlFor="smsnotification">SMS Notification:</label>
                                    <div className="col-md-9 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked12" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked12">Checked switch checkbox input</label>
                                    </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                    <label className="col-md-3" htmlFor="npass">When To Email</label>
                                    <div className="col-md-9">
                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault12" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault12">
                                            You have new notifications.
                                        </label>
                                        </div>
                                        <div className="form-check d-block">
                                        <input className="form-check-input" type="checkbox" defaultValue id="email02" />
                                        <label className="form-check-label" htmlFor="email02">You're sent a direct message</label>
                                        </div>
                                        <div className="form-check d-block">
                                        <input type="checkbox" className="form-check-input" id="email03" defaultChecked />
                                        <label className="form-check-label" htmlFor="email03">Someone adds you as a connection</label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group row align-items-center">
                                    <label className="col-md-3" htmlFor="npass">When To Escalate Emails</label>
                                    <div className="col-md-9">
                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="email04" />
                                        <label className="form-check-label" htmlFor="email04">
                                            Upon new order.
                                        </label>
                                        </div>
                                        <div className="form-check d-block">
                                        <input className="form-check-input" type="checkbox" defaultValue id="email05" />
                                        <label className="form-check-label" htmlFor="email05">New membership approval</label>
                                        </div>
                                        <div className="form-check d-block">
                                        <input type="checkbox" className="form-check-input" id="email06" defaultChecked />
                                        <label className="form-check-label" htmlFor="email06">Member registration</label>
                                        </div>
                                    </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                                    <button type="reset" className="btn bg-soft-danger">Cancle</button>
                                </form>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="manage-contact" role="tabpanel">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Manage Contact</h4>
                                </div>
                                </div>
                                <div className="card-body">
                                <form>
                                    <div className="form-group">
                                    <label htmlFor="cno" className="form-label">Contact Number:</label>
                                    <input type="text" className="form-control" id="cno" defaultValue="001 2536 123 458" />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="text" className="form-control" id="email" defaultValue="Bnijone@demo.com" />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="url" className="form-label">Url:</label>
                                    <input type="text" className="form-control" id="url" defaultValue="https://getbootstrap.com" />
                                    </div>
                                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                                    <button type="reset" className="btn bg-soft-danger">Cancle</button>
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
      );
}

export default EditProfile


