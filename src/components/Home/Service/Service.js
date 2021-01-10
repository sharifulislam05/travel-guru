import React from "react";
import "./service.css";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const serviceData = [
    {
      name: "Travel Arrangements",
      description:
        "Lorem ipsum dolor sit amet consect adiu piscing elit sed diam nonum euismo tincidunt ut.",
    },
    {
      name: "Cheap Flights",
      description:
        "Lorem ipsum dolor sit amet consect adiu piscing elit sed diam nonum euismo tincidunt ut.",
    },
    {
      name: "Privet Guide",
      description:
        "Lorem ipsum dolor sit amet consect adiu piscing elit sed diam nonum euismo tincidunt ut.",
    },
  ];
  
  return (
    <section className="container my-5">
      <div className="services__header text-center">
        <h3>OUR SERVICES</h3>
      </div>
      <div className="row">
        {serviceData.map((service) => (
          <ServiceCard service={service} key={service.name} />
        ))}
      </div>
    </section>
  );
};

export default Service;
