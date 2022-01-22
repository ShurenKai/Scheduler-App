function getAppointmentsForDay(state, day) {
  let filt = state.days.filter((x) => x.name === day);
  return filt.length === 0
    ? []
    : filt[0].appointments.map((app) => state.appointments[app]);
}

function getInterview(state, interview) {
  if (interview == null) {
    return null;
  }
  let values = Object.values(state.appointments);
  let result;

  for (let val of values) {
    if (val.interview == null) {
      result = null;
    } else if (val.interview !== null) {
      if (val.interview.interviewer === interview.interviewer) {
        val.interview.interviewer = state.interviewers[interview.interviewer];
        return val.interview;
      } else if (
        (val.interview.interviewer !== interview.interviewer) &
        (val.id === values.length)
      ) {
        return null;
      } else {
        continue;
      }
    }
  }
  return result;
}

export { getAppointmentsForDay, getInterview };

// val = { id: 1, time: '12pm', interview: null }
