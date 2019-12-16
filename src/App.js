import React from "react";
import { useGetIP } from "./actions/actions";
import Container from "./components/Container";
import "./App.css";

function App() {
  const [{ ip, lat, long }] = useGetIP();
  return (
    <div className="App">
      {ip ? <Container ip={ip} lat={lat} long={long} /> : <div>Loading...</div>}
    </div>
  );
}

export default App;
