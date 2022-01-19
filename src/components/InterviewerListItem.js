import React from 'react';
import classNames from 'classnames';

import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props){
  // const [ interviewer, setInterviewer ] = useState(0)
  const clicker = () => props.setInterviewer(props.name);

  const interviewerClass = classNames("interviewers__item", {
    "--selected": props.selected
  });

  return(
    <li onClick={clicker} class= { interviewerClass } >
      <img
        className= "interviewers__item-image"
        src= {props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );
}