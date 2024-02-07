import React, { Component } from "react";
import $ from "jquery";
import logo1 from "../../images/poert1.png";
import logo2 from "../../images/port2.png";
import logo3 from "../../images/port3.png";
import "./Portfolio.css";
class Portfolio extends Component {
  state = {
    work: "",
  };
  componentDidMount() {
    $(".image").click((e) => {
      let work = e.currentTarget.lastChild["src"];
      $(".full-img").css("display", "block");
      this.setState({ work });
    });
    $(".full-img").click((e) => {
    
      $(".full-img").css("display", "none");
      this.setState({ work: "" });
    });
  }
  render() {
    return (
      <div className="position-relative">
        <div className=" d-flex contact flex-column justify-content-center align-items-center py-4">
          <div className="container text-center py-3">
            <h2 className="py-2 fs-1">PORTFOLIO COMPONENT</h2>
            <div className="d-flex flex-row justify-content-center align-items-center g-3 py-2">
              <div className="contact-line mx-1"></div>
              <i className="fa-solid fa-star"></i>
              <div className="contact-line mx-1"></div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="image">
                  <div className="img-bg">
                    <div className="icon1">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img src={logo1} alt="img" className="w-100 rounded-4" />
                </div>
              </div>
              <div className="col-md-4">
                <div className=" image">
                  <div className="img-bg">
                    {" "}
                    <div className="icon1">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img src={logo2} alt="img" className="w-100 rounded-4" />
                </div>
              </div>
              <div className="col-md-4">
                <div className=" image">
                  <div className="img-bg">
                    {" "}
                    <div className="icon1">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img src={logo3} alt="img" className="w-100 rounded-4" />
                </div>
              </div>
              <div className="col-md-4">
                <div className=" image">
                  <div className="img-bg">
                    <div className="icon1">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img src={logo1} alt="img" className="w-100 rounded-4" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="image">
                  <div className="img-bg">
                    <div className="icon1">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img src={logo2} alt="img" className="w-100 rounded-4" />
                </div>
              </div>
              <div className="col-md-4">
                <div className=" image">
                  <div className="img-bg">
                    <div className="icon1">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <img src={logo3} alt="img" className="w-100 rounded-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-img">
          <img src={this.state.work} alt="img" className=" logo" />
        </div>
      </div>
    );
  }
}

export default Portfolio;
