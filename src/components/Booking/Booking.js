import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import destination from "../../Assets/fakeData/destination";
import "./_booking.css";
import BookingForm from "./BookingForm";
import NavBar from "../Shared/NavBar/NavBar";

const Booking = () => {
  const { place } = useParams();
  const [location, setLocation] = useState({});
  let history = useHistory();
  //route to matching location set for booking
  useEffect(() => {
    const bookingLocation = destination.find(
      (ln) => ln.destination.toLowerCase() === place.toLowerCase()
    );
    setLocation(bookingLocation);
  }, [place]);

  const handleStartBooking = () => {
    history.push(`/resort/${place}`);
  };
  //booking background style
  const bookingBackground = {
    height: "100vh",
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${location.img}')`,
  };

  return (
    <div className="booking-container" style={bookingBackground}>
      <div className="container">
        <NavBar />
        <div className="row booking">
          <div className="col-12 col-md-6 text-white">
            <h1>{location.destination}</h1>
            <p>{location.details}</p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <BookingForm handleStartBooking={handleStartBooking} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
