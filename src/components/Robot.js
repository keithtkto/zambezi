import React from "react";

export default ({ ip }) => (
  <img src={`https://robohash.org/${ip}.png?bgset=bg1`} />
);
