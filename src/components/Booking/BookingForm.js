import React, { useState } from "react";
import DatePicker from "react-datepicker";
import calenderLogo from "../../Assets/images/Icon/calender_icon.png";
import "react-datepicker/dist/react-datepicker.css";
import "./_booking.css";

const BookingForm = ({ handleStartBooking }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <form className="form-container" onSubmit={handleStartBooking}>
      <div className="form-group">
        <label htmlFor="origin">Origin</label>
        <input
          type="text"
          className="form-control"
          id="origin"
          name="origin"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          required
          className="form-control"
          id="destination"
          name="destination"
        />
      </div>
      <div className="form-group d-flex">
        <div>
          <label htmlFor="from">From</label> <br />
          <div className="d-flex border">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM"
              className="w-75 border-0"
            />
            <img
              src={calenderLogo}
              alt=""
              className="img img-fluid p-1 mr-2 calender-logo"
            />
          </div>
        </div>
        <div className="ml-3">
          <label htmlFor="to">To</label> <br />
          <div className="d-flex border">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM"
              className="w-75 border-0"
            />
            <img
              src={calenderLogo}
              alt=""
              className="img img-fluid p-1 mr-2 calender-logo"
            />
          </div>
        </div>
      </div>
      <input
        type="submit"
        className="btn btn-warning form-control"
        value="Start Booking"
      />
    </form>
  );
};

export default BookingForm;
