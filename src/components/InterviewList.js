import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewList.scss";

export default function InterviewerList(props) {
  const interview = props.interviewers.map((person) => {
    return (
      <InterviewerListItem
        name={person.name}
        avatar={person.avatar}
        selected={person.id === props.value}
        onChange={() => props.onChange(props.id)}
        key={person.id}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul>{interview}</ul>
    </section>
  );
}
