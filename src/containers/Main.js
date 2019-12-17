import React from "react";
import Robot from "../components/Robot";
import Quotes from "../components/Quotes";
import MapTile from "../components/MapTile";
import "../styles/main.css";

export default ({ robot, map, city }) => {
  return (
    <div>
      <h1>Quote Bot</h1>
      <div className="main">
        <div>
          <Robot robot={robot} />
          <div className="only-desktop">
            <MapTile map={map} />
            <p className="convo">
              Please rate this quote and I will fetch you the freshest quote
              from {city}
            </p>
          </div>
        </div>
        <Quotes />
      </div>
    </div>
  );
};
