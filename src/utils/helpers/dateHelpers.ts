/**
 * returns the 'YYYY/MM/DD' representation of a date
 * @param date date to be formatted
 * @returns 'YYYY/MM/DD'
 */
export const getDate = (date: Date = new Date()): string => {
    const [month, day, year] = date
        .toLocaleDateString()
        .split('/')
        .map((n) => (+n < 10 ? `0${n}` : n))
    return `${year}/${month}/${day}`
}
/**
 * returns the time in the format of HH:mm:ss
 * @param date date to extract time from
 * @returns 'HH:mm:ss'
 */
export const getTime = (date: Date = new Date()): string => {
    return date.toTimeString().slice(0, 8)
}

/**
 * returns the UTC time in the format of HH:mm:ss
 * @param date date to extract UTC time from
 * @returns 'HH:mm:ss'
 */
export const getUTCTime = (date: Date = new Date()): string => {
    return date.toISOString().slice(11, 19)
}
