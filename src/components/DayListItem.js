import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export function formatSpots(num) {
  let final = "";
  if (num > 1) {
    final = num + " spots remaining";
  } else if (num) {
    final = num + " spot remaining";
  } else {
    final = "no spots remaining";
  }
  return final;
}

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  return (
    <li
      onClick={() => props.setDay(props.name)}
      className={dayClass}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
