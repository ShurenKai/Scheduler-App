import React from "react";
import "components/Appointments/styles.scss"


export default function Appointment(props){
  let input = ''
  if( props.time) {
    input = "Appointment at " + props.time
  } else {
    input = 'No Appointments'
  }
  return (
    <article className="appointment">
      {input}
    </article>
  )
}