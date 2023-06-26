import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import teeth from "../../../assets/images/whitening.png";
import ServicesBox from "./ServicesBox";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F⁻, whose salts are typically white or colorless. ",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F⁻, whose salts are typically white or colorless. ",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F⁻, whose salts are typically white or colorless. ",
      icon: teeth,
    },
  ];
  return (
    <div className="text-center mt-10 mb-10">
      <h2 className="text-secondary text-2xl font-bold uppercase">
        Our Services
      </h2>
      <p className="text-4xl">Services We Provide</p>

      <div className="grid gap-12 w-full mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((card) => (
          <ServicesBox key={card.id} card={card}></ServicesBox>
        ))}
      </div>
    </div>
  );
};

export default Services;
