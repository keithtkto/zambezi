import React from "react";
import { Link } from "react-router-dom";
import Robot from "../components/Robot";
import MapTile from "../components/MapTile";
import "../styles/welcome.css";

export default ({ map, robot, city }) => {
  return (
    <Link to="/main">
      <h1>Welcome</h1>
      <Robot robot={robot} />
      <MapTile map={map} />
      <p className="intro">
        Hello human! I am your locally built Quote Bot from {city}. Please rate
        the quote and I will fetch you a new one.
        <br />
        <br />
        Click anywhere to continue.
      </p>
    </Link>
  );
};
