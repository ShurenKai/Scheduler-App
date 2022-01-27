import React, { useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointments";
import "components/Appointments";
import {
  getAppointmentsForDay,
  getInterviewersForDay,
  getInterview,
} from "./helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

////////////////////////////////////////////////////////////////////////////////////
// Application that is used to get the data (props) from API for other components //
////////////////////////////////////////////////////////////////////////////////////

export default function Application() {
  const { state, setState, setDay, bookInterview, cancelInterview } =
    useApplicationData();

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ])
      .then((all) => {
        setState({
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        });
      })
      .catch((err) => {
        console.log("ya dun goofed: ", err);
      });
  }, [setState]);

  ///////////////////////////////////////////
  // Where helper functions are being used //
  ///////////////////////////////////////////

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  ////////////////////////////////
  // Interview-editing function //
  ////////////////////////////////

  const editInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .patch(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then((res) => {
        setState({ ...state, appointments });
        return res;
      })
      .catch((err) => {
        console.log("cancelling canceled ", err);
      });
  };

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
          <DayList
            days={state.days}
            value={state.day}
            setDay={setDay}
            interviewers={state.interviewers}
          />
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
            {...dail}
            key={dail.id}
            id={dail.id}
            time={dail.time}
            interview={getInterview(state, dail.interview)}
            interviewers={interviewers}
            bookInterview={bookInterview}
            cancelInterview={cancelInterview}
            editInterview={editInterview}
          />
        ))}
        <Appointment key="last" time="5PM" />
      </section>
    </main>
  );
}

// {(setDay={setDay})}
