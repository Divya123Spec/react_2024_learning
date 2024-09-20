import React, { useCallback, useEffect, useState } from "react";
import Header from "../src/components/Header";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  const buttonClick = () => {
    setCount(count + 1);
  };
  const newFunc = useCallback(() => {}, [count]);

  return (
    <div>
      <Header newFunc={newFunc} /> // this is the Header component passing
      callback function as props
      <h1>UseCallback {count}</h1>
      <button onClick={buttonClick}> Count</button>
    </div>
  );
}

export default UseCallback;

// useCallback hook
// UseCallback is a React hook that lets you cache a function between re-renders.
// It means , when we use the useCallback hook,it doesn't create multiple instances of the function when renders happens.
// Instead of creating new instance of the function, it provides the cached version of the function on re render of the component.
