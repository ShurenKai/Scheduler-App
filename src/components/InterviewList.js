import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewList.scss";

export default function InterviewerList(props) {

  const interview = props.interviewers.map(person => 
    <InterviewerListItem {...person} 
      avatar={person.avatar} 
      selected={person.id === props.value} 
      onChange={() => props.onChange(props.id)} 
      key={person.id}/>
  )
  return (
    <ul>
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer {interview}</h4>
      </section>
    </ul>
  )
}