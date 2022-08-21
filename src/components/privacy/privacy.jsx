import React from "react";
import TMSHeader from "../shared/TMSHeader";
function Privacy() {
  return (
    <>
      <TMSHeader />
      <div className="container bg-white my-3">
        <div className="row">
          <div className="col-md-10 mx-auto py-3">
            <div className="about-us-content">
              <h1 className="text-center mb-4">Privacy Policy</h1>
              <p className="about_text">
                The Royal Travels is a web-based Enterprise application. The
                main purpose is to provide facilities to the tourists, so they
                can get the knowledge about the hotels and vehicles they are
                going to use in their trip before the starting of the trip.It
                will also helps agents to make tour plan, Hotel Manager to
                manage booking of their hotels, and to Vehicle owners who want
                to give theit vehicle on rent.
              </p>
              <p className="about_text">
                This system will manage all the tours locally (Pakistan only).
                Once the bookings are confirmed all the travel details, customer
                details as well as all the relevant details related to the trip
                like hotel name, room number, vehicle number, date of arriving,
                date of departure, and every single detail will be available to
                the client. Customers can cancel the booking but with a
                deduction fee. This system will manage the customer data and
                transaction information securely. TMS will keep the customers up
                to date about the availability/unavailability of packages or any
                other issue, so customers will not face any problems.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <hr />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center my-4">Developers</h1>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Privacy;
