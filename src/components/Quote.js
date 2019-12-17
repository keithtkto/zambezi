import React from "react";
import "../styles/quotes.css";

export default ({ quote, author, idx, rating }) => {
  return (
    <div className="quote-wrapper">
      <h2>
        Quote {idx + 1}{" "}
        {rating && (
          <span className="rating" style={{ color: rating.color }}>
            {rating.text}
          </span>
        )}
      </h2>
      <p className="quote">{quote}</p>
      <span className="author">{author}</span>
    </div>
  );
};
