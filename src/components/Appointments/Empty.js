import React from "react";
import "components/Appointments/styles.scss"

export default function Expty(props){

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onCLick={props.onAdd}
      />
    </main>
  )
}