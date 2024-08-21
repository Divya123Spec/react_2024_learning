import React, { useState } from "react";

function UseStates() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red",
  });

  const ChangeCar = () => {
    setCar((prevState) => {
      return { ...prevState, color: "blue" };
    });
  };
  const Increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const OnChangeColor = () => {
    setColor("blue");
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment </button>
      <div>
        <h2>Color: {color}</h2>
        <button onClick={OnChangeColor}>Blue</button>
      </div>
      <div>
        <h2>Car</h2>
        <h3>Brand: {car.brand}</h3>
        <h3>Model: {car.model}</h3>
        <h3>Year: {car.year}</h3>
        <h3>Color: {car.color}</h3>
        <button onClick={ChangeCar}>Change Car</button>
      </div>
    </div>
  );
}

export default UseStates;
// The useState hook enbales the functional component to manage the state.
