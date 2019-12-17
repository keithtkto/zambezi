import React from "react";
import "../styles/overlay.css";

export default ({ children }) => {
  return <div className="overlay">{children}</div>;
};
