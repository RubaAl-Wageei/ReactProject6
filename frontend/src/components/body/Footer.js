import React from 'react'

function Footer() {
  return (
    <footer className="iq-footer bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="../dashboard/privacy-policy.html">Privacy Policy</a></li>
                <li className="list-inline-item"><a href="../dashboard/terms-of-service.html">Terms of Use</a></li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              Copyright 2020 <a href="#">SocialV</a> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>   
  )
}

export default Footer