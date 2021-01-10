import React from "react";
import john from "../../../Assets/images/mr.jpg";
import FeedbackCard from "./FeedbackCard";
import "./feedback.css";

const ClientFeedback = () => {
  const testimonialData = [
    {
      quote:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu tousing ‘Content here, content ",
      name: "Baria Watson",
      from: "California",
      img: john,
    },
    {
      quote:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu tousing ‘Content here, content ",
      name: "Mr. John",
      from: "California",
      img: john,
    },
    {
      quote:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu tousing ‘Content here, content ",
      name: "Mr. Ayan",
      from: "California",
      img: john,
    },
  ];

  return (
    <section>
      <div className="feedback__header text-center">
        <h3>Client Feedback</h3>
      </div>
      <div className="container">
        <div className="row mb-3">
          {testimonialData.map((testimonial, i) => (
            <FeedbackCard testimonial={testimonial} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
