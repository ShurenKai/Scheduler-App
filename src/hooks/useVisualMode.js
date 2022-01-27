import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    // const newHist = [...history];
    // note: not considering stale state yet
    //////////////////////////
    // add prev later !!!!! //
    //////////////////////////

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

// add new dish to stack
// add dish to top
// replace top dish with new dish
