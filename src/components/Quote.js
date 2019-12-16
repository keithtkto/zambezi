import React from "react";

export default ({ quote, author }) => {
  return (
    <div>
      <p>{quote}</p>
      <span>{author}</span>
    </div>
  );
};
