import React from "react";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCards/InfoCards";
import Services from "./Services/Services";
import DentalCare from "./DentalCare/DentalCare";

const Home = () => {
  return (
    <div className="px-5">
      <Banner />
      <InfoCards />
      <Services />
      <DentalCare></DentalCare>
    </div>
  );
};

export default Home;
