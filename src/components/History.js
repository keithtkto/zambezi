import React from "react";
import Quote from "./Quote";

export default ({ history }) => {
  return (
    <div>
      {history.map(({ quote, author, rating }, idx) => (
        <Quote
          key={`history-${idx}`}
          quote={quote}
          author={author}
          idx={idx}
          rating={rating}
        />
      ))}
    </div>
  );
};
