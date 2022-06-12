import React from "react";
import TMSFooter from "../shared/TMSFooter";
import TMSHeader from "../shared/TMSHeader";
import emailjs from 'emailjs-com';
import image1 from '../../bg.jpg'
function Contact() {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_mwckml8', 'template_azahiva', e.target, 'wUP3qnIrKaX9Wr6_V').then(res=>{
      console.log(res);
        }).catch(err=> console.log(err));
  }

  return (
    <>
      <TMSHeader />
      
      <div className="container border"
      style={{marginTop: '20px',
      width: '50%',
      backgroundImage: `url(${image1})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'}}>
        <center><h1 style={{marginTop: '25px'}}>Contact Us</h1></center>
        <form className="row" style={{margin: '25px 85px 75px 100px'}} onSubmit={sendEmail}>
          <label>Name: </label>
          <input type='text' name='name'/>

          <label>Email: </label>
          <input type='Email' name=' ' className="form-control"/>

          
          <label>Message: </label>
          <textarea name='message' rows='4' className="form-control"/>
          <input type='submit' value='Send' className="form-control btn btn-primary"
          style={{marginTop: '30px'}}/>
        </form>
      </div>
      <hr />
      <div className="container my-4">
        <div className="row">
          <div className="col-10 mx-auto bg-white p-3">
            <h3 className="text-
      center">Why travel with us?</h3>
            <div className="col-8 mx-auto">
              <div className="row my-3">
                <div className="col-4 mx-auto">
                  <li>Secure Transactions</li>
                  <li>Less Manual Work</li>
                </div>
                <div className="col-4 mx-auto">
                  <li>Booking from your home</li>
                  <li>Pay from Home</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TMSFooter />
    </>
  );
}

export default Contact;
