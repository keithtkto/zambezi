import React, { useState, useEffect, useReducer, useRef } from "react";
import { getQuote, getTextToVoice } from "../actions/actions";
import Quote from "./Quote";
import RateQuote from "./RateQuote";
import Overlay from "./Overlay";
import History from "./History";
import Commands from "./Commands";
import CloseBtn from "./CloseBtn";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "new-quote":
      return {
        ...state,
        currentQuote: payload,
        isLoading: false
      };
    case "rate-quote":
      return {
        ...state,
        history: [...state.history, { ...state.currentQuote, rating: payload }],
        isLoading: true,
        currentQuote: {}
      };
    default:
      return state;
  }
};

const initState = {
  history: [],
  currentQuote: {},
  isLoading: true
};

export default ({}) => {
  const audioRef = useRef(null);
  const [voiceData, setVoiceData] = useState(null);
  const [showOverlay, setOverlay] = useState(false);
  const [{ history, currentQuote, isLoading }, dispatch] = useReducer(
    reducer,
    initState
  );
  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    getQuote(payload => dispatch({ type: "new-quote", payload }));
    setVoiceData(null);
  };

  const handleGetVoiceData = quote => {
    if (voiceData) {
      audioRef.current.play();
    } else {
      getTextToVoice(quote, setVoiceData);
    }
  };

  const handleRateQuote = input => {
    dispatch({ type: "rate-quote", payload: input });
    getNewQuote();
  };

  console.log(history, currentQuote);

  const { quote, author } = currentQuote;

  return (
    <div>
      <audio controls src={voiceData} autoPlay={true} ref={audioRef}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <Commands
        handleShowHistory={() => setOverlay(true)}
        handleGetVoiceData={() => handleGetVoiceData(quote)}
        hasQuote={quote}
      />
      {isLoading ? (
        <div className="skeleton" />
      ) : (
        <Quote idx={history.length} quote={quote} author={author} />
      )}
      {!isLoading && <RateQuote handleRateQuote={handleRateQuote} />}
      {showOverlay && (
        <Overlay>
          <CloseBtn handleClose={() => setOverlay(false)} />
          <History history={history} />
        </Overlay>
      )}
      {/* <History history={history} /> */}
    </div>
  );
};
