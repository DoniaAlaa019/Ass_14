import React, { Component } from "react";
import $ from "jquery";
import "./Contact.css";
class Contact extends Component {
  state = {
    name: 0,
  };    

  componentDidMount(){
   $('input').keyup( (e) => {
      let sizename = $('#name').val().length;
      if(sizename > 0){
        $('.text-user-name').css('display', 'block');
        this.setState({name : 0});
      }else{
        $('.text-user-name').css('display', 'none');
      }
      let sizeage = $('#age').val().length;
      if(sizeage > 0){
        $('.text-user-age').css('display', 'block');
        this.setState({name : 0});
      }else{
        $('.text-user-age').css('display', 'none');
      }
      let sizeemail = $('#email').val().length;
      if(sizeemail > 0){
        $('.text-user-email').css('display', 'block');
        this.setState({name : 0});
      }else{
        $('.text-user-email').css('display', 'none');
      }
      let sizepassword = $('#password').val().length;
      if(sizepassword > 0){
        $('.text-user-password').css('display', 'block');
        this.setState({name : 0});
      }else{
        $('.text-user-password').css('display', 'none');
      }
    });
  }
  render() { 
    return (
      <div>
        <div className=" d-flex contact flex-column justify-content-center align-items-center py-5">
          <div className="container text-center">
            <h2 className="py-2 fs-1">CONATCT SECTION</h2>
            <div className="d-flex flex-row justify-content-center align-items-center g-3 py-2">
              <div className="contact-line mx-1"></div>
              <i className="fa-solid fa-star"></i>
              <div className="contact-line mx-1"></div>
            </div>
            <div className="container">
              <div className="py-5 row d-flex flex-column justify-content-center align-items-center text-start">
                <div className="col-md-8">
                    <label htmlFor="name" className="text-user-name">userName :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="userName"
                    className="my-3 py-2  form-control border-start-0 border-top-0 border-end-0"
                
                  />
                </div>
                <div className="col-md-8">
                <label htmlFor="age" className="text-user-age">userAge :</label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    placeholder="userAge"
                    className="my-3 pt-2  form-control border-start-0 border-top-0 border-end-0"
                  />
                </div>
                <div className="col-md-8">
                <label htmlFor="emil" className="text-user-email">userEmail :</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="userEmail"
                    className="my-3 pt-2  form-control border-start-0 border-top-0 border-end-0"
                  />
                </div>
                <div className="col-md-8">
                <label htmlFor="password" className="text-user-password">userPassword :</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="userPassword"
                    className="my-3 pt-2  form-control border-start-0 border-top-0 border-end-0"
                  />
                </div>
                <div className="col-md-8 py-3">
                <button className="btn btn-color-send d-flex flex-row justify-content-start text-white">send message</button></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
