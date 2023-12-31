import React from "react";
import "../Banner/Banner.css";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="bg shadow shadow-black backdrop-blur-lg">
      <div className=" hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className=" max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="box">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi
          </p>
          <button className="btn bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
