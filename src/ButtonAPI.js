import "./styles.css";
import React, { useState, useEffect } from "react";

export default function ButtonAPI() {
  const [data, setData] = useState();
  const [buttonstate, setButtonstate] = useState(true);

  const fecthData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setData(result);
    setButtonstate(false);
    console.log(result);
  };
  const btnClick = () => {
    setButtonstate(true);
    fecthData();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={btnClick} disabled={!buttonstate}>
        Click Me
      </button>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
}
