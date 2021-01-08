import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import locationMapInfo from "../../../Assets/fakeData/locationMapInfo";
import "./_maps.css";

const Maps = (props) => {
  const selected = props.place;
  const location = locationMapInfo.find(
    (place) => place.location.toLowerCase() === selected.toLowerCase()
  );

  return (
    <div className="map-container">
      <Map
        google={props.google}
        zoom={15}
        className="map-style"
        initialCenter={{
          lat: location.latitude,
          lng: location.longitude,
        }}
      >
        <Marker name={"Current location"} />
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyCCCDHBf-UUz5RcVUrkEvq7dnVawUJLTmE",
})(Maps);
