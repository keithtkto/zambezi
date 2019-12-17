import React from "react";
import "../styles/commands.css";

export default ({ handleShowHistory, handleGetVoiceData }) => {
  return (
    <div>
      <h2>Robot Commands</h2>
      <ul className="commands">
        <li className="command" onClick={handleGetVoiceData}>
          Read this quote
        </li>
        <li className="command" onClick={handleShowHistory}>
          Show past quotes
        </li>
      </ul>
    </div>
  );
};
