import React from "react";
import "../styles/quotes.css";

export default ({ quote, author, length }) => {
  return (
    <div className="quote">
      <h2>Quote {length}</h2>
      <p>{quote}</p>
      <span className="author">{author}</span>
    </div>
  );
};
