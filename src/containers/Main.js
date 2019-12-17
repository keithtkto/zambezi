import React from "react";
import Robot from "../components/Robot";
import Quotes from "../components/Quotes";

export default ({ robot }) => {
  return (
    <div>
      <h1>Quote Bot</h1>
      <Robot robot={robot} />
      <Quotes />
    </div>
  );
};
