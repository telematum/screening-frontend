export const FilterFirstAlphaString = (text) => {
    let strArr = text.split(' ')
    let first = strArr[0]
    // We use last string in a array because if any user have middle name then we use first and last surname as avatar string
    let last = strArr[strArr.length - 1]
    return `${first.charAt(0)}${last.charAt(0)}`
}

export const FilterDate = (date) => {
   const getFormatDate = new Date(date)
   return `${getFormatDate.getDate()} ${getFormatDate.toLocaleString('default', { month: 'long' })} ${getFormatDate.getFullYear()}`
}