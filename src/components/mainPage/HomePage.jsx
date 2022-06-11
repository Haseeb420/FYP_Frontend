import React from "react";
import TMSFooter from "../shared/TMSFooter";
import TMSHeader from "../shared/TMSHeader";
import Slider from "../Sliders/Slider";

function HomePage() {
  return (
    <>
      <TMSHeader />
      <Slider />
      <hr />
      <div className="container my-4">
        <div className="row">
          <div className="col-10 mx-auto bg-white p-3">
            <h3 className="text-center">Why travel with us?</h3>
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

export default HomePage;
