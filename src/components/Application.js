import React, { useState } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointments";
import "components/Appointments";
import { getAppointmentsForDay } from "./helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {
      interview: null,
      time: "",
    },
  });
  const setDay = (day) => setState({ ...state, day });
  const dailyAppointments = getAppointmentsForDay(
    state.appointments,
    state.day
  );
  const apps = dailyAppointments.map((app) => (
    <Appointment key={app.id} {...app} />
  ));

  Promise.all([
    axios.get("http://localhost:8001/api/days"),
    axios.get("http://localhost:8001/api/appointments"),
    axios.get("http://localhost:8001/api/interviewers"),
  ]).then((all) => {
    setState({ day: "Monday", days: all[0].data });
    setState({ id: all[1].data });
    setState({ dailyAppointments: all[2].data });
  });

  Promise.all([
    Promise.resolve("first"),
    Promise.resolve("second"),
    Promise.resolve("third"),
  ]).then((all) => {
    setState((prev) => ({
      ...prev,
      first: all[0],
      second: all[1],
      third: all[2],
    }));
  });

  // .catch((all) => {
  //   console.log("Rest in state", all[0].data);
  //   console.log("Rest in appointment", all[1].err);
  // });

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
        {apps}
        <Appointment key="last" time="5PM" />
      </section>
    </main>
  );
}
