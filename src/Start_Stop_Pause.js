import "./styles.css";
import React, { useState, useContext, useRef } from "react";

export default function Start_Stop_Pause() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef();

  const startTime = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };
  const stopTime = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const pauseTime = () => {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  const formatDate = (timer) => {
    const hours = Math.floor(timer / 3600);
    const mints = Math.floor((timer % 3600) / 60);
    const seconds = Math.floor(timer % 60);

    const formatHr = String(hours).padStart(2, "0");
    const formatmint = String(mints).padStart(2, "0");
    const formatSec = String(seconds).padStart(2, "0");

    return `${formatHr} : ${formatmint}: ${formatSec}`;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <p>{formatDate(time)}</p>
        <button onClick={startTime}>Start</button>
        <button onClick={stopTime}>Stop</button>
        <button onClick={pauseTime}>Pause</button>
      </div>
    </div>
  );
}
