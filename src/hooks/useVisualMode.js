import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    const newHist = [...history];
    // note: not considering stale state yet
    //////////////////////////
    // add prev later !!!!! //
    //////////////////////////

    console.log("Transition Called");

    if (replace) {
      newHist.pop();
    }

    newHist.push(newMode);
    setHistory(newHist);
  };

  // note: not considering stale state yet
  ////////////////////
  // add prev !!!!! //
  ////////////////////

  const back = () => {
    if (history.length < 2) {
      return;
    }
    const newHist = [...history];
    newHist.pop();
    setHistory(newHist);
  };

  const mode = history[history.length - 1];

  return { mode, transition, back };
}

// add new dish to stack
// add dish to top
// replace top dish with new dish
