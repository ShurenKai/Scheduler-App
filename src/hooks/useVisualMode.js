import React, { useState, useEffect } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (m, bool) => {
    setMode(m);
    history.push(m);
    if (bool) {
      console.log(
        `Transition to ${m} by REPLACING ${history[history.length - 1]}`
      );
    }
  };

  const back = () => {
    const fin = history.findIndex((f) => f === mode);
    setMode(history[fin - 1]);
  };

  // `Transition to ${history[fin - 1]} by REPLACING ${history[fin]}`

  return { mode, transition, back };
}

// just know, I thought the bottom could have also worked eventually without the replace

// if (bool) {
//   console.log(
//     `Transition to ${m} by REPLACING ${history[history.length - 1]}`
//   );
// }
