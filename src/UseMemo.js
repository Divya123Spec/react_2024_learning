import React, { useState, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNumber() {
    console.log("cubeNumber called");
    return Math.pow(number, 3);
  }
  const result = useMemo(() => {
    // here we are using useMemo hook to cache the value of cubeNumber function
    return cubeNumber();
  }, [number]);

  const numberChange = (e) => {
    setNumber(e.target.value);
  };

  const onButtonClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>UseMemo component </h1>
      <input type="number" value={number} onChange={numberChange} />
      <h1>Cube of the number:{result}</h1>
      <button onClick={onButtonClick}>Counter++</button>
      <h1>Counter: {counter}</h1>
    </div>
  );
}

export default UseMemo;

// useMemo?
// The React useMemo hook returns a memoized value.
// (i.e its caching a value so that it doesn't need to be recalucated every time the component re-renders)
// use Memo hooks only runs when one of its dependencies gets updated.
// it will improve the performance of the application by avoiding the re-calculation of the same value.
// one more hook that is similar to useMemo is useCallback.
// both are simliar but the difference is that useMemo returns a  memoized value and useCallback returns a  memozied function.
