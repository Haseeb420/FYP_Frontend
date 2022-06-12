import React from "react";
import TMSFooter from "../shared/TMSFooter";
import TMSHeader from "../shared/TMSHeader";
import emailjs from "emailjs-com";
import image1 from "../../bg.jpg";
// import "./contact.css";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mwckml8",
        "template_azahiva",
        e.target,
        "wUP3qnIrKaX9Wr6_V"
      )
      .then((res) => {
        alert("Email Sent!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <TMSHeader />

      <div
        className="container border"
        style={{
          marginTop: "20px",
          width: "50%",
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <center>
          <h1 className="text-center text-dark" style={{ marginTop: "25px" }}>
            Contact Us
          </h1>
        </center>
        <form
          className="row text-white"
          style={{
            margin: "25px 85px 75px 100px",
            padding: "20px",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          onSubmit={sendEmail}
        >
          <div className="from-group my-3">
            {/* <label htmlFor="name">Name</label> */}
            <label className="h5">Name: </label>
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="from-group my-3">
            {/* <label htmlFor="name">Name</label> */}
            <label className="h5">Email: </label>
            <input type="Email" name=" " className="form-control" />
          </div>

          <div className="form-group my-3">
            <label className="h5">Message: </label>
            <textarea name="message" rows="4" className="form-control" />
          </div>
          <input
            type="submit"
            value="Send"
            className="form-control btn btn-primary"
            style={{ marginTop: "30px" }}
          />
        </form>
      </div>
      <hr />
      <div className="container my-4">
        <div className="row">
          <div className="col-10 mx-auto bg-white p-3">
            <h3
              className="text-
      center"
            >
              Why travel with us?
            </h3>
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
