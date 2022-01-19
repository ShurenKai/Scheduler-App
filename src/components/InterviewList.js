import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewList.scss";

export default function InterviewerList(props) {

  const interviewer = props.interviewers.map(person => <InterviewerListItem {...person} image={person.avatar} selected={person.name === props.interviewers} setInterviewer={props.setInterviewer} key={person.id}/>)

  return (
    <ul>
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers">{interviewer}</ul>
      </section>
    </ul>
  )
}