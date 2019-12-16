import React from "react";

const ratings = ["Lame", "Meh...", "Great!"];

export default ({ handleRateQuote }) => {
  return (
    <div>
      {ratings.map(r => (
        <button key={r} onClick={() => handleRateQuote(r)}>
          {r}
        </button>
      ))}
    </div>
  );
};
