
export function changeTimeFormat(s) {
    let parts = s.split("-")
    let day = parts[2]
    let month = ""
    if (parts[1] == "01") {
        month = "Jan"
    } else if (parts[1] == "02") {
        month = "Feb"
    } else if (parts[1] == "03") {
        month = "Mar"
    } else if (parts[1] == "04") {
        month = "Apr"
    } else if (parts[1] == "05") {
        month = "May"
    } else if (parts[1] == "06") {
        month = "Jun"
    } else if (parts[1] == "07") {
        month = "Jul"
    } else if (parts[1] == "08") {
        month = "Aug"
    } else if (parts[1] == "09") {
        month = "Sep"
    } else if (parts[1] == "10") {
        month = "Oct"
    } else if (parts[1] == "11") {
        month = "Nov"
    } else if (parts[1] == "12") {
        month = "Dec"
    }

    return `${day} ${month} ${parts[0]}`
}