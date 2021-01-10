import React from "react";

const FeedbackCard = ({ testimonial }) => {
  const { quote, name, from, img } = testimonial;

  return (
    <div className="col-md-4 border-0 pl-4 pr-0">
      <div className="row">
        <div className="col-md-2 shadow-sm">
          <img src={img} className="img-fluid client__img " alt="..." />
        </div>
        <div className="col-md-6">
          <h6 className="aqua-text">{name}</h6>
          <p className="text-secondary">{from}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-secondary text-justify pr-5">{quote}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
