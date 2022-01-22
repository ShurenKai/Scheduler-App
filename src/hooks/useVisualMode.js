import React, { useState, useEffect } from "react";
import { useVisualMode } from "../hooks/useVisualMode";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (m, bool) => {
    setMode(m);
    history.push(m);
    if (bool) {
      let newHist = `Transition to ${m} by REPLACING ${mode}`;
      let joined = history.join(",");
      joined = joined.replace(mode, m);
      setHistory(joined.split(","));
      console.log(newHist);
    }
  };

  const back = () => {
    const fin = history.findIndex((f) => f === mode);
    setMode(history[fin - 1]);
    console.log(history);
  };

  return { mode, transition, back };
}
