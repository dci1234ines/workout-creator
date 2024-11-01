import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const secondsDisplay = sec % 60;
    return `${minutes}:${secondsDisplay < 10 ? "0" : ""}${secondsDisplay}`;
  };

  return (
    <div>
      <h3>Timer: {formatTime(seconds)}</h3>
      <button onClick={toggle}>{isActive ? "Stopp" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
