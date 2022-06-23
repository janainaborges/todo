import React, { useState, useEffect } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div style={{ display: "flex"}} >
      <div style={{width: "30px", color: "white"}}>

        {seconds}s
      </div>
      <div >
        <button  onClick={toggle} style={{border: "none"}}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button style={{border: "none"}} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
