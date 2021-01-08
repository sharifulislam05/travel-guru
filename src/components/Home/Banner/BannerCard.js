import React from "react";

const BannerCard = ({ location, handleDestination }) => {
  const { destination, img, id } = location;

  const cardStyle = {
    backgroundImage: `linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%), url(${img})`,
    height: "350px",
    width: "100%",
    backgroundPosition: "center bottom",
  };

  return (
    <div className="banner__card" onClick={() => handleDestination(id)}>
      <div
        className="d-flex align-items-end banner__card--child"
        style={cardStyle}
      >
        <h4 className="text-white p-3">{destination}</h4>
      </div>
    </div>
  );
};

export default BannerCard;
