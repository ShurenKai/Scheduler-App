import { useState } from "react";

///////////////////////////////////////////////////////////////////
// Sets the mode states depending on which hook function is used //
///////////////////////////////////////////////////////////////////

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setHistory((prev) => {
      const newHist = [...prev];
      if (replace) {
        newHist.pop();
      }

      return [...newHist, newMode];
    });
  };

  const back = () => {
    if (history.length < 2) {
      return;
    }
    let newHist = [...history];
    newHist.pop();
    setHistory(newHist);
  };

  return { mode: history[history.length - 1], transition, back };
}
