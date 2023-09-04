/**
 * Returns the current year.
 *
 * This function calculates and returns the current year based on the system's local time.
 * It utilizes the Date object to retrieve the year component from the current date.
 *
 * @returns {number} The current year.
 */
export function currentYear() {
  const currDate = new Date();
  const currYear = currDate.getFullYear();

  return currYear;
}
