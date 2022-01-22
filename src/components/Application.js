import React, { useEffect, useState } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointments";
import "components/Appointments";
import { getAppointmentsForDay, getInterview } from "./helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {
      id: null,
      time: "",
      interview: {
        id: null,
        name: "",
        avatar: "",
      },
    },
  });
  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ])
      .then((all) => {
        console.log(all);
        setState({
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        });
      })
      .catch((err) => {
        console.log("ya dun goofed: ", err);
      });
  }, []);

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  console.log(dailyAppointments);
  const interview = getInterview(state, state.appointments.interview);

  console.log(interview);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />

        <hr className="sidebar_separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} setDay={setDay} />
        </nav>

        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments.map((dail) => (
          <Appointment
            key={dail.id}
            id={dail.id}
            time={dail.time}
            interview={dail.interview}
          />
        ))}
        <Appointment key="last" time="5PM" />
      </section>
    </main>
  );
}

// {(setDay={setDay})}
