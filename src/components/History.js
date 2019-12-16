import React from "react";

export default ({ history }) => {
  return (
    <ul>
      {history.map(({ quote, author }, i) => (
        <li key={i}>
          <p>{quote}</p>
          <span>{author}</span>
        </li>
      ))}
    </ul>
  );
};
