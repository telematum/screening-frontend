export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options).replace(/,/g, "");
};
