// here we will convert the date (input date format 2024-2-1)
export const formatDate = (date) => {
    const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    date = date?.split('-');

    if(date?.length !== 3) throw new Error("Invalid Input date format.");

    // here we will convert monthNumber into month Date
    const month = months[Number(date[1])];

    // output format => 1 Feb 2024
    return `${date[2]} ${month} ${date[0]}`;
}