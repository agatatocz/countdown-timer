import React, { useState } from "react";
import { Countdown } from "./Countdown";
import { CountdownMonths } from "./CountdownMonths";

export const ViewSwitch = () => {
  const [showMonths, setShowMonths] = useState(true);
  return (
    <div>
      {showMonths && <CountdownMonths />}
      {!showMonths && <Countdown />}
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
