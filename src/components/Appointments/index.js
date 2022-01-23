import React from "react";
import "components/Appointments/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? "SHOW" : "EMPTY"
  );

  // mode: show - put show tag below
  // mode: empty -> return empty -> onAdd -> create -> return form

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === "EMPTY" && <Empty onClick={() => transition("CREATE")} />}
      {mode === "SHOW" && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === "CREATE" && <Form interviewers={[]} onCancel={back} />}
    </article>
  );
}
