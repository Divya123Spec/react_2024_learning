import "./styles.css";
import React, { useState } from "react";

 function ToggleButton() {
  const [button, setButton] = useState("On");

  const buttonClick = () => {
    console.log("button clicke");
    if (button == "Off") {
      setButton("On");
    } else if (button == "On") {
      setButton("Off");
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={buttonClick}>Click Me </button>
      <p>{button}</p>
    </div>
  );
}
export default ToggleButton;