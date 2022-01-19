import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {

  const availability = props.days.map(day => <DayListItem {...day}selected={day.name === props.day} setDay={props.setDay} key={day.id} />)

  return (
    <ul>
      {availability}
    </ul>
  )
}