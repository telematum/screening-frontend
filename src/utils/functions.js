import moment from "moment";

export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate.replace(",", "");
}

export function hasAppointmentTimePassed(appointmentTime) {
  const targetTime = moment(appointmentTime, "hh:mm A");

  const currentTime = moment();

  return currentTime.isAfter(targetTime);
}
