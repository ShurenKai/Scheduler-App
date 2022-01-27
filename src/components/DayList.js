import React from "react";
import DayListItem from "./DayListItem";

/////////////////////////////////////////////////////
// Goes through the list of days and displays them //
/////////////////////////////////////////////////////

export default function DayList(props) {
  const days = Array.from(props.days);

  const availability = days.map((day) => (
    <DayListItem
      {...day}
      selected={day.name === props.value}
      setDay={() => {
        props.setDay(day.name);
      }}
      key={day.id}
    />
  ));

  return <ul>{availability}</ul>;
}
