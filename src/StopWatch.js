import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    // State for tracking time (in seconds)
    const [seconds, setSeconds] = useState(0);
    // State for checking if the timer is running
    const [isActive, setIsActive] = useState(false);

    // useEffect hook to handle the timer logic
    useEffect(() => {
        let interval = null;

        // Start the timer when isActive is true
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000); // Increment every 1000ms (1 second)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval); // Clear the interval if stopped
        }

        // Cleanup the interval on component unmount or when isActive changes
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    // Function to format seconds into MM:SS format
    const formatTime = () => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };

    // Start the timer
    const handleStart = () => {
        setIsActive(true);
    };

    // Stop the timer
    const handleStop = () => {
        setIsActive(false);
    };

    // Reset the timer
    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>{formatTime()}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Stopwatch;
