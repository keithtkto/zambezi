import React, { useState, useEffect } from "react";
import { useGetIP, getRobot, getMapTile } from "./actions/actions";
import Container from "./containers/Container";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [{ ip, lat, long }] = useGetIP();
  const [robot, setRobot] = useState(null);
  const [map, setMap] = useState(null);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    getRobot(ip, setRobot);
    getMapTile({ lat, long }, setMap);
  }, [ip]);
  useEffect(() => {
    if ((ip, robot, map)) setTimeout(() => setIsReady(true), 500);
  }, [ip, robot, map]);

  return (
    <div className="App">
      {isReady ? <Container robot={robot} map={map} /> : <Loader />}
    </div>
  );
}

export default App;
