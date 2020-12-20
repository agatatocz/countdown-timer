import React, { useEffect, useState } from "react";

const targetTime = new Date("01-03-2022").getTime();
const initialTime = Date.now();

export const CountDown = () => {
  const [currentTime, setCurrentTime] = useState(initialTime);

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <span>{days} days </span>
      <span>{hours}h </span>
      <span>{minutes}min </span>
      <span>{seconds}s left.</span>
    </>
  );
};
