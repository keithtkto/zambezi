import React, { useState, useEffect } from "react";
import Robot from "../components/Robot";
import Quotes from "../components/Quotes";
import MapTile from "../components/MapTile";
import { getRobot, getMapTile } from "../actions/actions";

export default ({ ip, lat, long }) => {
  const [robot, setRobot] = useState(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    getRobot(ip, setRobot);
  }, []);
  useEffect(() => {
    getMapTile({ lat, long }, setMap);
  }, []);

  return (
    <div>
      <h1>Quote Bot</h1>
      <Robot robot={robot} />
      <Quotes ip={ip} />
      <MapTile map={map} />
    </div>
  );
};
