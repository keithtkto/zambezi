import React from "react";
import "../styles/commands.css";

export default ({ handleShowHistory, handleGetVoiceData, hasQuote }) => {
  return (
    <div>
      <h2>Robot Commands</h2>
      <div className="commands">
        <button
          className="command"
          onClick={hasQuote && handleGetVoiceData}
          style={{ color: hasQuote ? "#000" : "grey" }}
        >
          {hasQuote ? "Read this quote" : "Awaiting new quote"}
        </button>
        <button className="command" onClick={handleShowHistory}>
          Show past quotes
        </button>
      </div>
    </div>
  );
};
