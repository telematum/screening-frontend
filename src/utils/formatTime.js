export function formatTime(timeString) {
  // Remove the space between minutes and AM/PM
  timeString = timeString.replace(" ", "");

  // Extract hours, minutes, and AM/PM indicator
  const [time, period] = timeString.split(" ");
  const [hours, minutes] = time.split(":");

  // Convert hours to 24-hour format if necessary
  let formattedHours = parseInt(hours, 10);
  if (period === "PM" && formattedHours !== 12) {
    formattedHours += 12;
  } else if (period === "AM" && formattedHours === 12) {
    formattedHours = 0;
  }

  // Format hours and minutes with leading zeros if necessary
  formattedHours = (formattedHours + "").substring(0, minutes.length - 2);
  const formattedMinutes = minutes.substring(0, minutes.length - 2);

  // Construct the formatted time string
  const formattedTime = `${formattedHours}:${formattedMinutes}`;

  return formattedTime;
}
