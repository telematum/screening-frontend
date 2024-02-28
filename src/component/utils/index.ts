export function formatDate(inputDate: string) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [year, month, day] = inputDate.split('-');
    const formattedDate = `${parseInt(day)} ${months[parseInt(month) - 1]} ${parseInt(year)}`;
    return formattedDate;
}

export function stringAvatar(name: string) {
    const parts = name.split(' ');
    let initials = '';
    parts.forEach((p) => {
        initials += p[0];
        return null;
    });
    return initials

}
