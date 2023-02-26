import React from 'react'

const LeftSidebar = () => {
  return (
    <div className="iq-sidebar  sidebar-default ">
          <div id="sidebar-scrollbar">
            <nav className="iq-sidebar-menu">
              <ul id="iq-sidebar-toggle" className="iq-menu">

                <li className>
                  <a href="/EditProfile" className=" ">
                    <i className="las la-user" /><span>Edit Profile</span>
                  </a>
                </li>
               
                <li className="active">
                  <a href="/Group" className=" ">
                    <i className="las la-users" /><span>Group</span>
                  </a>
                </li>
                
                <li className>
                  <a href="/ProfileForum" ><i className="ri-focus-2-line" /><span>Profile Forum</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                </li>

                <li className>
                  <a href="/Chat" ><i className="ri-pages-line" /><span>Friends</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                </li>

                <li className=" ">
                  <a href="#" className=" ">
                    <i className="ri-login-box-line" /><span>Logout</span>
                  </a>
                </li>
                
              </ul>
            </nav>
            <div className="p-5" />
          </div>
        </div>
  )
}

export default LeftSidebar