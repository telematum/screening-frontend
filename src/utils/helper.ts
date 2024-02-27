export const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    return formattedDate;
}

export const getFormattedMobileNo = (mobileNo: string) => {
    return "+" + mobileNo.split("-").join(" ")
}