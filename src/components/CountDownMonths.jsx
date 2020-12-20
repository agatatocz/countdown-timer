import React, { useEffect, useState } from "react";
import moment from "moment";

const targetTime = moment("2022-03-01");
const initialTime = moment();

export const CountDownMonths = () => {
  const [currentTime, setCurrentTime] = useState(initialTime);
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <span>{timeBetween.years()} years </span>
      <span>{timeBetween.months()} months </span>
      <span>{timeBetween.days()} days </span>
      <span>{timeBetween.hours()}h </span>
      <span>{timeBetween.minutes()}min </span>
      <span>{timeBetween.seconds()}s left. </span>
    </div>
  );
};
