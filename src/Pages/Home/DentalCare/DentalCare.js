import React from "react";
import treatment from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div className="card h-[555px] mt-12 mx- lg:card-side bg-base-100 shadow-xl justify ">
      <figure className="position-fixed">
        <img src={treatment} alt="Album" />
      </figure>
      <div className="card-body text-center items-center justify-center ">
        <h2 className="card-title text-5xl">
          Exceptional Dental Care On Yours Terms{" "}
        </h2>
        <p>
          Is there such a thing as an exceptional dentist? We use these big
          fancy words like exceptional a little too easily at times to describe
          lorem55 you
        </p>
        <div className="card-actions ">
          <button className="btn glass">Glass button</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
