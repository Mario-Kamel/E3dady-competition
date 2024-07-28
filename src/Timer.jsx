import React, { useEffect } from 'react';
import './App.css'; 

const Timer = ({ time, setTime, onTimeUp, counting }) => {
  useEffect(() => {
    if (time > 0 && counting) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (time === 0) {
      onTimeUp();
    }
  }, [time, setTime, onTimeUp, counting]);

  return (
    <div className="timer">
      <h2 className="folding-number">{time}</h2>
    </div>
  );
};

export default Timer;