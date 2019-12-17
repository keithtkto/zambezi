import React from "react";
import "../styles/quotes.css";
const ratings = [
  { text: "Lame", color: "#ff6347" },
  { text: "Meh...", color: "ffbf47" },
  { text: "Great!", color: "#029619" }
];

export default ({ handleRateQuote }) => {
  return (
    <div className="rate-btns">
      {ratings.map(r => (
        <button
          className="rate-btn"
          style={{ borderColor: r.color }}
          key={r.text}
          onClick={() => handleRateQuote(r)}
        >
          {r.text}
        </button>
      ))}
    </div>
  );
};
