export function formatDate(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Split the input date string by '-'
  const parts = inputDate.split("-");

  // Extract year, month, and day from the parts array
  const year = parts[0];
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  // Format the date
  const formattedDate = day + " " + months[month - 1] + " " + year;

  return formattedDate;
}
