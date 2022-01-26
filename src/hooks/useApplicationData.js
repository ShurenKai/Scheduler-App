import { useState } from "react";
import axios from "axios";

export default function useApplicationData() {
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
        interviewer: null,
      },
    },
    interviewers: {},
  });
  const setDay = (day) => {
    setState({ ...state, day });
  };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then((res) => {
        setState({ ...state, appointments });
        return res;
      })
      .catch((err) => {
        console.log("RIP", err);
      });
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then((res) => {
        setState({ ...state, appointments });
        return res;
      });
  };

  return { state, setState, setDay, bookInterview, cancelInterview };
}
