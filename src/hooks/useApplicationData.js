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

  const spotsRemaining = (appointments) => {
    const newDays = [...state.days];

    for (let newDay of newDays) {
      if (newDay.name === state.day) {
        newDay.spots = 0;
        for (let appointId of newDay.appointments) {
          if (appointments[appointId].interview === null) {
            newDay.spots++;
          }
        }
      }
    }

    return newDays;
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
        let newDays = spotsRemaining(appointments);
        setState({ ...state, appointments, days: newDays });
        return res;
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
        let newDays = spotsRemaining(appointments);
        setState({ ...state, appointments, days: newDays });
        return res;
      });
  };

  return { state, setState, setDay, bookInterview, cancelInterview };
}
