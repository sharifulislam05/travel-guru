import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import ClientFeedback from "../ClientFeedback/ClientFeedback";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <ClientFeedback />
      <Footer />
    </div>
  );
};

export default Home;
