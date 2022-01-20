import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const onChange = (e) => {
    setStudent(e.target.value);
  };

  const reset = () => {
    setStudent("");
    setInterviewer("");
  };

  const cancel = () => {
    reset();
    {
      props.onCancel();
    }
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name=""
            type="text"
            placeholder="Enter Student Name"
            onChange={onChange}
            value={student}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={() => props.onSave()}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
