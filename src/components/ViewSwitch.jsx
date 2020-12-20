import React, { useState } from "react";
import { CountDown } from "./CountDown";
import { CountDownMonths } from "./CountDownMonths";

export const ViewSwitch = () => {
  const [showMonths, setShowMonths] = useState(true);
  return (
    <div>
      {showMonths && <CountDownMonths />}
      {!showMonths && <CountDown />}
      <button
        onClick={() => {
          setShowMonths(!showMonths);
        }}
      >
        Switch timer
      </button>
    </div>
  );
};
