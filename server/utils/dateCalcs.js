module.exports = {
  getDayOfYear: function (date = new Date()) {
    const timestamp1 = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    )
    const timestamp2 = Date.UTC(date.getFullYear(), 0, 0)
    const differenceInMilliseconds = timestamp1 - timestamp2
    const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24
    return differenceInDays
  },
  getWeekNumber: function (givenDate) {
    const startDate = new Date(givenDate.getFullYear(), 0, 1)
    const days = Math.floor((givenDate - startDate) /(24 * 60 * 60 * 1000))
    return Math.ceil(days / 7)
  },
  getLastDateOfTheYear: function (givenYear) {
    // buggy?
    const dateDec30 = new Date(givenYear, 11, 31)
    const dateDec31 = dateDec30
    dateDec31.setDate(dateDec30.getDate() + 1)
  },
  getDayOfWeekVerbose: function (givenDayOfWeek) {
    let dayName
      switch (givenDayOfWeek) {
        case 0:
          dayName = "Sunday"
          break;
        case 1:
          dayName = "Monday"
          break;
        case 2:
          dayName = "Tuesday"
          break;
        case 3:
          dayName = "Wednesday"
          break;
        case 4:
          dayName = "Thursday"
          break;
        case 5:
          dayName = "Friday"
          break;
        case 6:
          dayName = "Saturday"
          break;
        default:
          dayName = "Error: day of week number outside of 0-6"
          break;
      }
    return dayName
  },
  getMonthOfYearVerbose: function (givenMonthOfYear) {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let retval = month[givenMonthOfYear-1]
    return retval
  },
  getNextMonth: function (givenMonthOfYear) {
    return (givenMonthOfYear==12)? 1 : givenMonthOfYear + 1
  }
};