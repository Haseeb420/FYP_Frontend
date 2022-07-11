import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import TMSHeader from "../shared/TMSHeader";
import TMSFooter from "../shared/TMSFooter";
import HotelCard from "./HotelCard";

var Hotels = () => {
  const [packagesList, setPackagesList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let url = "http://127.0.0.1:8000/tms_api/hotels_api";
        const resutl = await axios.get(url, {
          headers: {
            Authorization: "Token 3e6d228ed10d57a2061861cb109011aca43fb122",
          },
        });
        setPackagesList(resutl.data);
        console.log(resutl.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <TMSHeader />
      <div className="container">
        <div className="row my-5">
          {packagesList.map((p) => (
            <>
              <HotelCard key={p.HotelId} hotelObj={p} />
            </>
          ))}
        </div>
      </div>
      <TMSFooter />
    </>
  );
};

export default Hotels;
