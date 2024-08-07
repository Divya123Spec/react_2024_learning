import React, { useState } from "react";

function Hook_usestate() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default Hook_usestate;

// The useState hook enbales the functional component to manage the state.
// It returns an array with two elements.
// The first element is the current state value and the second element is a function that allows you to update the state value.
// The concept of assign array elements to invidual variables is called array destructuring.
// const [state, setState] = useState(initialState);
// here state is the current state value and setState is the function that allows you to update the state value.
