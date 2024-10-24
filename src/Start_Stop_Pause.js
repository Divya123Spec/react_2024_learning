import "./styles.css";
import React, { useState } from "react";
import { useReducer, useRef } from "react";

function Start_Stop_Pause() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const reducer = (state, action) => {
    switch (action) {
    }
  };

  const startTime = () => {
    console.log(startTime);
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTime = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const pauseTime = () => {
    if (running) {
      // If the timer is running, we can pause it
      clearInterval(intervalRef.current); // Clear the interval
      setRunning(false); // Set running to false to indicate it's paused
    }
  };

  const formatTime = (timer) => {
    const seconds = 60;
    const mint = Math.floor(timer / 60);
    const remainingTime = timer % 60;
    return `${mint + ":" + remainingTime}`;
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <p> MM:SS{formatTime(time)}</p>
      <button onClick={startTime}> Start</button>

      <button onClick={stopTime}> Stop </button>

      <button onClick={pauseTime}> Pause</button>
    </div>
  );
}
export default Start_Stop_Pause;
