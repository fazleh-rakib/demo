import React from "react";

const ServicesBox = ({ card }) => {
  const { name, description, icon } = card;
  return (
    <div className="card w-full bg-base-100 shadow-lg">
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body text-center items-center">
        <h2 className="card-title ">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesBox;
