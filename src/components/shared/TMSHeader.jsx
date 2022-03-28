import React from "react";
import Navbar from "./NavBar";
import tms_logo from "../../assets/logo/1.png";
import InfoHeader from "./InfoHeader";
import TitleHeader from "./TitleHeader";
import TMSFooter from "./TMSFooter";
function TMSHeader() {
  return (
    <>
      <InfoHeader />
      <TitleHeader />
      <Navbar logoName={tms_logo} />
      <TMSFooter />
    </>
  );
}

export default TMSHeader;
