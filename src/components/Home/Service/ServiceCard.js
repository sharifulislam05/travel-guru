import React from "react";

const ServiceCard = ({ service }) => {
  const { name, description } = service;
  
  return (
    <div className="col-md-4 mt-2 mt-md-5 text-center">
      <div className="m-2 shadow">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
