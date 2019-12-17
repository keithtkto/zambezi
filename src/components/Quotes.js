import React, { useState, useEffect, useReducer } from "react";
import { getQuote } from "../actions/actions";
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
        currentQuote: null
      };
    default:
      return state;
  }
};

const initState = {
  history: [],
  currentQuote: null,
  isLoading: true
};

export default ({}) => {
  const [showOverlay, setOverlay] = useState(false);
  const [{ history, currentQuote, isLoading }, dispatch] = useReducer(
    reducer,
    initState
  );

  const getNewQuote = () =>
    getQuote(payload => dispatch({ type: "new-quote", payload }));

  useEffect(() => {
    getNewQuote();
  }, []);

  const handleRateQuote = input => {
    dispatch({ type: "rate-quote", payload: input });
    getNewQuote();
  };

  console.log(history, currentQuote);

  if (isLoading) {
    return <div>Loading quotes</div>;
  }

  const { quote, author } = currentQuote;

  return (
    <div>
      <Commands handleShowHistory={() => setOverlay(true)} />
      <Quote idx={history.length} quote={quote} author={author} />
      <RateQuote handleRateQuote={handleRateQuote} />
      {showOverlay && (
        <Overlay>
          <CloseBtn handleClose={() => setOverlay(false)} />
          <h2>Past Quotes</h2>
          {history.length ? (
            <History history={history} />
          ) : (
            <div>No past quote yet</div>
          )}
        </Overlay>
      )}
      {/* <History history={history} /> */}
    </div>
  );
};
