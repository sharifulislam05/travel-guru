import React, { useState } from "react";
import destination from "../../../Assets/fakeData/destination";
import defaultDestination from "../../../Assets/fakeData/defaultDestination";
import BannerCard from "./BannerCard";
import NavBar from "../../Shared/NavBar/NavBar";
import "./_banner.css";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const [location, setLocation] = useState(destination);
  const [selectedLocation, setSelectedLocation] = useState(defaultDestination);
  let history = useHistory();
  //selected location set from fake-data
  const handleDestination = (locationId) => {
    const selectDestination = location.find(
      (location) => location.id === locationId
    );
    setSelectedLocation(selectDestination);
  };
  
  const handleBooking = () => {
    history.push(`/destination/${selectedLocation.destination}`);
  };
  //banner-background style
  const bannerStyle = {
    height: " 100vh",
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${selectedLocation.img})`,
  };

  return (
    <main className="banner" style={bannerStyle}>
      <div className="container banner__nav">
        <NavBar />
      </div>
      <div className="row offset-md-1">
        <div className="col-11 col-md-4 ml-3 ml-md-0 text-white text-justify">
          <h1>{selectedLocation.destination}</h1>
          <p className="banner__short-description">
            {selectedLocation.shortDescription}
          </p>
          <button className="btn btn-warning" onClick={handleBooking}>
            Booking ->{" "}
          </button>
        </div>
        <div className="col-12 col-md-8 ">
          <div className="row m-0 p-0">
            {location.map((location) => (
              <div key={location.id} className="col-md-4 pr-4 mt-4 mt-md-0">
                <BannerCard
                  location={location}
                  handleDestination={handleDestination}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
