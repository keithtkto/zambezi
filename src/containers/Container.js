import React, { useState, useEffect } from "react";
import Robot from "../components/Robot";
import Quotes from "../components/Quotes";
import MapTile from "../components/MapTile";

export default ({ map, robot }) => {
  return (
    <div>
      <h1>Quote Bot</h1>
      <Robot robot={robot} />
      <Quotes />
      <MapTile map={map} />
    </div>
  );
};
