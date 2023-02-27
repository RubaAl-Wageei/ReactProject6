import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {

    const navigate = useNavigate()
    const [inputs, setInputs]=useState({}); 
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        getUsers();
    }, []);

    const handleChange= (event)=>{

        const name = event.target.name; // to get the name of the input
        const value = event.target.value; // to get the value of the input 
        
        setInputs(values =>({...values, [name]: value})); // to set the values (the name of input then : the value of that input) to values
    }  


    const handleSubmit =(event)=>{
        event.preventDefault(); // to prevent the page from refresh on submit

        // console.log(inputs, "My inputs")
    }

    const getUsers = ()=>{

        axios.get('http://localhost/ReactProject6/backend/theUsers.php/{$id}').then((response)=>{
            // console.log(response.data); // to print the data from database in console
            setUsers(response.data); // add data to my useState
            console.log(response.data)
        
        })
     }


     const profile = () => {
        for (const user of users) {
            // console.log(inputs)
            // console.log(users)
          if (user.email === inputs.email && user.password === inputs.password && Object.entries(inputs.email).length > 0 && Object.entries(inputs.password).length > 0) {
            console.log("Welcome User");
            localStorage.setItem('id' , JSON.stringify(user.id))
            localStorage.setItem('first_name' , JSON.stringify(user.first_name))
            localStorage.setItem('last_name' , JSON.stringify(user.last_name))
            localStorage.setItem('email' , JSON.stringify( user.email))
            localStorage.setItem('password' , JSON.stringify( user.password))
            localStorage.setItem('phone' , JSON.stringify( user.phone))
            navigate('/EditProfile')

            return; // Exit the loop once a matching user is found
          }
        }
        document.getElementById('errorLog').innerHTML = "the password or email is wrong"
        console.log("Not User !");
      }

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
                                <form  onSubmit={handleSubmit}>
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
                                        <input type="text" className="form-control" name='fname' value={inputs.first_name} id="fname"    onChange={handleChange}/>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="lname" className="form-label">Last Name:</label>
                                        <input type="text" className="form-control" name='lname' value={inputs.last_name} id="lname"    onChange={handleChange}/>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="uname" className="form-label">Email</label>
                                        <input type="text" className="form-control" name='email' value={inputs.email} id="email"    onChange={handleChange}/>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="cname" className="form-label">Password</label>
                                        <input type="text" className="form-control" name='password' value={inputs.password} id="pass"    onChange={handleChange}/>
                                    </div>
                                    
                                    <div className="form-group col-sm-6">
                                        <label htmlFor="dob" className="form-label">Phone Number</label>
                                        <input className="form-control" name='phone' value={inputs.phone} id="phone"    onChange={handleChange}/>
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    
                                    </div>
                                    <button type="submit" className="btn btn-primary me-2" onClick={profile}>Submit</button>
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


