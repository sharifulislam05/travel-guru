import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import hotels from "../../Assets/fakeData/hotels";
import SearchNav from "../Shared/SearchNav/SearchNav";
import Maps from "./Maps/Maps";
import ResortCard from "./ResortCard/ResortCard";
import "./_search.css";

const Search = () => {
  const { place } = useParams();
  const [resort, setResort] = useState([]);
  //selected place resort filter
  useEffect(() => {
    const resortDetails = hotels.filter(
      (resort) => resort.destination.toLowerCase() === place.toLowerCase()
    );
    setResort(resortDetails);
  }, [place]);

  return (
    <div className="container">
      <SearchNav />
      <div className="row search">
        <div className="col-12 col-md-6">
          <div className="ml-0 ml-md-3 mt-3 search__resort--header">
            <p>252 stays april 13-17 3guests</p>
            <h4>Stay in {place}</h4>
          </div>
          <div>
            {resort.map((resort) => (
              <ResortCard resort={resort} key={resort.hotelName} />
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <Maps place={place} />
        </div>
      </div>
    </div>
  );
};

export default Search;
