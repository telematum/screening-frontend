export const findMonthInAlphabetFromNumber = (index) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[index];
};

export const get24FormattedDateTime = (date, time) => {
  let dateAndTime = new Date(`${date} ${time}`);
  let day = dateAndTime.getDate();
  let month = dateAndTime.getMonth();
  let year = dateAndTime.getFullYear();
  return {
    formattedTime: `${dateAndTime.getHours()}:${String(
      dateAndTime.getMinutes()
    ).padStart(2, 0)}`,
    formattedDate: `${day} ${findMonthInAlphabetFromNumber(month)} ${year}`,
  };
};
