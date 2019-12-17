import React, { useEffect, useReducer } from "react";
import { getQuote } from "../actions/actions";
import Quote from "./Quote";
import RateQuote from "./RateQuote";
import Overlay from "./Overlay";
import History from "./History";

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

export default ({ ip }) => {
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
      <Quote length={history.length + 1} quote={quote} author={author} />
      <RateQuote handleRateQuote={handleRateQuote} />
      <Overlay>
        {history.length ? (
          <History history={history} />
        ) : (
          <div>No past quote yet</div>
        )}
      </Overlay>
      {/* <History history={history} /> */}
    </div>
  );
};
