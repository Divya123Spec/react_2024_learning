import React, { useState, useReducer } from "react";

function UseReducer() {
  const [count, Setcount] = useState(0);
  const intialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "input":
        return { count: state.count + action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);
  // const increment = () => {
  //   Setcount(count + 1);
  // };
  // const decrement = () => {
  //   Setcount(count - 1);
  // };
  return (
    <div>
      <h1>UseReducer {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        {" "}
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        {" "}
        Decrement
      </button>
      <br />
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
        value={state.count}
      />
    </div>
  );
}
export default UseReducer;

// useReducer hook
// UseReducer is simliar to usestate hook, But instead of providing the new
// state and setter function.It provides the state and dispatch function.
// UseState hook accpets two arguments
//  - reducer function
// - initial state
// and returns the current state and dispatch function
// it specifies how state is updated in response to an action
