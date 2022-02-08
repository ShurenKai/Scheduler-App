import React from "react";
import "components/Appointments/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

////////////////////////////////////////////////////
// Props for Appointment are given by Application //
////////////////////////////////////////////////////

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
    props
      .bookInterview(props.id, interview)
      .then(() => transition("SHOW"))
      .catch((err) => transition("ERROR_SAVE", true));
  };

  const del = (id) => {
    console.log(props.id);
    if (mode !== "CONFIRM") {
      transition("CONFIRM");
    } else if (mode === "CONFIRM") {
      transition("DELETE");
      props
        .cancelInterview(props.id)
        .then(() => transition("EMPTY"))
        .catch((err) => transition("ERROR_DELETE"));
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

  //////////////////////////////////////////////////////////////////////
  // Uses other Appointment components on based the condition of mode //
  //////////////////////////////////////////////////////////////////////

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === "EMPTY" && <Empty onAdd={() => transition("CREATE")} />}
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
          value={props.value}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === "SAVING" && <Status message="Keeping your data in check :3c" />}
      {mode === "DELETE" && <Status message="Go away ;-;" />}
      {mode === "CONFIRM" && (
        <Confirm
          message="Are you sure you want this to die?"
          onConfirm={del}
          onCancel={back}
        />
      )}
      {mode === "EDIT" && (
        <Form
          value={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === "ERROR_SAVE" && (
        <Error message="Could not save appointment" onClose={back} />
      )}
      {mode === "ERROR_DELETE" && (
        <Error
          message="Could not delete appointment"
          onClose={() => transition("SHOW")}
        />
      )}
    </article>
  );
}
