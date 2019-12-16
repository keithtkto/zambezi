import React, { useState, useEffect } from "react";

export default ({ lat, long }) => {
  return (
    <img
      src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s(${long},${lat})/${long},${lat},9.67,0.00,0.00/250x250@2x?access_token=pk.eyJ1Ijoic2VhbnAiLCJhIjoiY2p1MDY1YmljM2NnMjN6bXVnZXRpeGdvdSJ9.om-OkYVrL4-GyeWA3Evj2g`}
    />
  );
};
