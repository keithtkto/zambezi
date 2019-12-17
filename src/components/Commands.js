import React from "react";
import "../styles/commands.css";

export default ({ handleShowHistory }) => {
  return (
    <div>
      <h2>Robot Commands</h2>
      <ul className="commands">
        <li className="command">Read this quote</li>
        <li className="command" onClick={handleShowHistory}>
          Show past quotes
        </li>
      </ul>
    </div>
  );
};
