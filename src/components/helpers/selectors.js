export function getAppointmentsForDay(state, day) {
  const filterDays = state.days.filter((days) => days.name === day);
  return filterDays;
}
