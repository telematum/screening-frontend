// contains all  common Functions

export const convertDate = (dateString) => {
  const dateObject = new Date(dateString);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = dateObject.toLocaleDateString("en-GB", options);
  return formattedDate;
};

export const convertTime = (timeString) => {
  const [hours, minutes, period] = timeString.split(/:| /);
  const formattedHours =
    period === "PM"
      ? (parseInt(hours, 10) + 12).toString().padStart(2, "0")
      : hours;
  const formattedTime = `${formattedHours}:${minutes} ${period}`;
  return formattedTime;
};
