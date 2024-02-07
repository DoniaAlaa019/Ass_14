import React from "react";
import { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import About from "../About/About.jsx";
import Contact  from "../Contact/Contact.jsx";
import logo from "../../images/avataaars.svg";
import Portfolio from "../Portfolio/Portfolio.jsx";
class Home extends Component {
  state = {
  };

  render() {
    switch (this.props.cursor) {
      case 'Home':
        return (
          <div className="d-flex flex-column justify-content-between  vh-100">
            <Navbar />
            <div className="home-bg d-flex vh-100 flex-column justify-content-center align-items-center py-5 text-white">
              <img src={logo} alt="img" width={250} className="py-3"/>
              <h2 className="py-2">START FRAMEWORK</h2>
              <div className="d-flex flex-row justify-content-center align-items-center g-3 py-2">
                <div className="bg-white line mx-1"></div>
                <i className="fa-solid fa-star"></i>
                <div className="bg-white line mx-1"></div>
              </div>
              <p className="py-1">Graphic Artist - Web Designer - Illustrator</p>
            </div>

            <Footer />
          </div>
        );
        case 'About':
          return (
            <div className="d-flex flex-column justify-content-between  vh-100">
              <Navbar />
              <About />
              <Footer />
            </div>
          );
          
          case 'Contact':
            return (
              <div className="d-flex flex-column justify-content-between  vh-100">
                <Navbar />
               
                <Contact />
                <Footer />
              </div>
            );
            case 'Portfolio':
              return (
                <div className="d-flex flex-column justify-content-between  vh-100">
                  <Navbar />
                 
                  <Portfolio />
                  <Footer />
                </div>
              );
      default:
        return (
          <div className="d-flex flex-column justify-content-between  vh-100">
            <Navbar />
           
            <Footer />
          </div>
        );
    }
   
  }
}

export default Home;
