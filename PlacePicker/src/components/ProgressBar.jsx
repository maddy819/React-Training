import { useState, useEffect } from "react";

const ProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime + 50);
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} min="0" max={timer} />;
};

export default ProgressBar;
