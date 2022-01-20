import React from "react";
import classNames from "classnames";

import "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const clicker = () => props.onChange(props.id);

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    <li onClick={clicker} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
