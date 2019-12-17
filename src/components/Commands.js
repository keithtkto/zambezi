import React from "react";
import "../styles/commands.css";

export default ({ handleShowHistory, handleGetVoiceData }) => {
  return (
    <div>
      <h2>Robot Commands</h2>
      <div className="commands">
        <button className="command" onClick={handleGetVoiceData}>
          Read this quote
        </button>
        <button className="command" onClick={handleShowHistory}>
          Show past quotes
        </button>
      </div>
    </div>
  );
};
