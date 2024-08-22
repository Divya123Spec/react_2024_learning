import React, { useState, useEffect, useRef } from "react";

function UseRef() {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  const inputEle = useRef(null);

  //example of ueRef for not rendering the component multiple times when the value changes
  useEffect(() => {
    count.current = count.current + 1;
  });

  const minusButton = () => {
    setValue((prevValue) => prevValue - 1);
  };
  const addButton = () => {
    setValue((prevValue) => prevValue + 1);
  };

  // example for accessing the DOM elements directly
  const btnClicked = () => {
    inputEle.current.focus();
    console.log(inputEle.current.value);
    if (inputEle.current.value) {
      inputEle.current.style.backgroundColor = "red";
      alert(inputEle.current.value);
    }
  };
  return (
    <div>
      <h1>UseRef component</h1>
      <button onClick={minusButton}>-1</button>
      <h1>{value}</h1>
      <button onClick={addButton}>+1</button>
      <h1>Render Count:{count.current}</h1>

      <input type="text" ref={inputEle} />
      <button onClick={btnClicked}>Click here to test Ref Hook</button>
    </div>
  );
}

export default UseRef;

// useRef?
// The UseRef is a react hook that allows us to create mutuable variables in functional components.
// which will not re-render the component when the value changes.
// useRef is also used for accessing the DOM elements directly.
// useRef is used to store the reference of an element.
