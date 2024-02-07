import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <>
      {/* position-fixed bottom-0 w-100 */}
        <div className="footer-bg ">
          <div className="container text-center text-white  py-5">
            <div className="row d-flex flex-row justify-content-center align-items-start g-3">
              <div className="col-md-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive </p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4">
                <h3>AROUND THE WEB</h3>
                <div className="social-media d-flex flex-row justify-content-center align-items-center">
                  <i className="fa-brands fa-facebook icon"></i>
                  <i className="fa-brands fa-twitter icon"></i>
                  <i className="fa-brands fa-linkedin-in icon"></i>
                  <i className="fa-solid fa-globe icon"></i>
                </div>
              </div>
              <div className="col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created 
                  by Route
                </p>
              </div>
            </div>
          </div>
          <div className="copy-bg">
            <div className="container text-center text-white ">
              <div className="row d-flex flex-row justify-content-center align-items-baseline mx-auto py-3">
                <p>Copyright © Your Website 2021</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
