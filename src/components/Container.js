import React from "react";
import Robot from "./Robot";
import Quotes from "./Quotes";
import MapTile from "./MapTile";

export default ({ ip, lat, long }) => {
  return (
    <div>
      <h1>Qoute Bot</h1>
      <Robot ip={ip} />
      <Quotes ip={ip} />
      <MapTile lat={lat} long={long} />
    </div>
  );
};
