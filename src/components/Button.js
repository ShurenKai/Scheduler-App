import React from "react";
import classNames from "classnames";

import "components/Button.scss";
import "components/DayListItem";

//////////////////////////////////////////////////////////
// Buttons used based on what they're being called into //
//////////////////////////////////////////////////////////

export default function Button(props) {
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger,
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
