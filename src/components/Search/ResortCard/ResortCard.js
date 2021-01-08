import React from "react";
import ratingImg from "../../../Assets/images/Icon/star_1_.png";

const ResortCard = ({ resort }) => {
  const { img, hotelName, facility, flexibility, cost, rating } = resort;

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={img}
          alt=""
          className="w-100 h-100 p-0 p-md-3 mt-3 resort__img"
        />
      </div>
      <div className="col-md-6 mt-3">
        <h5>{hotelName}</h5>
        <div className="text-muted resort__description">
          <p>4 guests 2bedrooms 2beds 2baths</p>
          <p>{facility}</p>
          <p>{flexibility}</p>
        </div>
        <p className="d-inline-block float-left mr-3">
          <img src={ratingImg} alt="" className="img-fluid w-25 pb-1" />
          {rating}
        </p>
        <p>
          {cost}/<span className="text-muted">Night</span>
        </p>
      </div>
    </div>
  );
};

export default ResortCard;
