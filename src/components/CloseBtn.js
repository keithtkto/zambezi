import React from "react";
import "../styles/common.css";

export default ({ handleClose }) => (
  <button className="close-btn" onClick={handleClose}>
    Close
  </button>
);
