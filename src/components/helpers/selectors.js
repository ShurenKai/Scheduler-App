///////////////////////////////////////////
// Helper functions used in Appointments //
///////////////////////////////////////////

function getAppointmentsForDay(state, day) {
  let filt = state.days.filter((x) => x.name === day);
  return filt.length === 0
    ? []
    : filt[0].appointments.map((app) => state.appointments[app]);
}

function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  return {
    student: interview.student,
    interviewer: { ...state.interviewers[interview.interviewer] },
  };
}

function getInterviewersForDay(state, day) {
  let filt = state.days.filter((x) => x.name === day);
  return filt.length === 0
    ? []
    : filt[0].interviewers.map((m) => state.interviewers[m]);
}

export { getAppointmentsForDay, getInterview, getInterviewersForDay };
