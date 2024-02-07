import React, { Component } from "react";
import './About.css';
class About extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="home-bg d-flex flex-column justify-content-center align-items-center text-white">
          <div className="container text-center w-76">
            <h2 className="py-2 fs-1">ABOUT COMPONENT</h2>
            <div className="d-flex flex-row justify-content-center align-items-center g-3 py-2">
              <div className="bg-white line mx-1"></div>
              <i className="fa-solid fa-star"></i>
              <div className="bg-white line mx-1"></div>
            </div>
            <div className="py-3 row d-flex flex-row justify-content-center align-items-center text-start">
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
