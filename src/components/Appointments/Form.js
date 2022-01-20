import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent("");
    setInterviewer("");
  };

  const cancel = () => {
    reset();
    // eslint-disable-next-line no-lone-blocks
    {
      props.onCancel();
    }
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name=""
            type="text"
            placeholder="Enter Student Name"
            onChange={(e) => setStudent(e.target.value)}
            value={student}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          onChange={(id) => setInterviewer(id)}
          value={interviewer}
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
