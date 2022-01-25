import React from "react";
import "components/Appointments/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? "SHOW" : "EMPTY"
  );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition("SAVING");
    props.bookInterview(props.id, interview).then(() => transition("SHOW"));
  };

  const del = (id) => {
    if (mode !== "CONFIRM") {
      transition("CONFIRM");
    } else if (mode === "CONFIRM") {
      transition("DELETE");
      props.cancelInterview(props.id).then(() => transition("EMPTY"));
    } else {
      console.log("NOPE");
    }
  };

  const change = (id) => {
    const view = {
      student: id.student,
      interviewer: props.interview.interviewer,
    };

    if (mode === "SHOW") {
      transition("EDIT");
      return view;
    } else if (mode === "EDIT") {
      transition("SAVING");
      props.editInterview(id, view).then(() => transition("SHOW"));
    } else {
      console.log("NO WAY");
    }
  };

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === "EMPTY" && <Empty onClick={() => transition("CREATE")} />}
      {mode === "SHOW" && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={del}
          onEdit={change}
          id={props.id}
        />
      )}
      {mode === "CREATE" && (
        <Form
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === "SAVING" && <Status message="Keeping your data in check :3c" />}
      {mode === "DELETE" && <Status message="Go away ;-;" />}
      {mode === "CONFIRM" && (
        <Confirm message="Are you sure you want this to die?" onConfirm={del} />
      )}
      {mode === "EDIT" && (
        <Form
          name={props.name}
          value={props.student}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
    </article>
  );
}
