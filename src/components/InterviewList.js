import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewList.scss";

export default function InterviewerList(props) {

  const interviewer = props.interviewer.map(person => <InterviewerListItem {...person} selected={person.name = props.interviewer} setInterviewer={props.setInterviewer} key={person.id}/>)

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">{interviewer}</h4>
      <ul className="interviewers__list"></ul>
    </section>
  )
}