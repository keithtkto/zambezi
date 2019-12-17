import React from "react";
import "../styles/common.css";

export default () => (
  <div className="loader">
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
    <span className="loading">Loading...</span>
  </div>
);
