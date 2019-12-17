import React from "react";
import Quote from "./Quote";
import "../styles/history.css";

export default ({ history }) => {
  return (
    <div className="history">
      <h1>Past Quotes</h1>
      {history.length ? (
        history.map(({ quote, author, rating }, idx) => (
          <Quote
            key={`history-${idx}`}
            quote={quote}
            author={author}
            idx={idx}
            rating={rating}
          />
        ))
      ) : (
        <h2>No past quote yet</h2>
      )}
    </div>
  );
};
