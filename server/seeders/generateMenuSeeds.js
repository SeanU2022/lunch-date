// production: heroku run node ./seeds/seed.js;;
// RUN node generateMenuSeeds
const fs = require('fs');

const { getDayOfYear, getWeekNumber, getDayOfWeekVerbose, getMonthOfYearVerbose, getNextMonth } = require('../utils/dateCalcs')
// import { getDayOfYear, getWeekNumber, getDayOfWeekVerbose, getMonthOfYearVerbose } from '../utils/dateCalcs'

// ***********************************************************************************
// Menu Date seeds
const preDate = new Date();
const startDate = new Date(preDate.getFullYear(), getNextMonth(preDate.getMonth()), 1)
const thisYear = startDate.getFullYear();
const nDate = new Date(thisYear, 11, 31) // Dec 30th thisYear
let endDate = nDate
endDate.setDate(nDate.getDate());  // Dec 31st thisYear

// daysOfYear: excludes weekends from the 1st of the next month until 31st December of the current year
// Issue: you cannot seed the next year until 1st January
// Future: seed January next year in December this year
let daysOfYear = [];
for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
  // 0 for Sunday, 6 for Saturday    
  if ((day.getDay() != 0)  &&  (day.getDay() != 6)) 
  {
    daysOfYear.push(new Date(day));
  }
}

// test code
let printit
let prepMenu = 
`[
`
    let monthNum
    daysOfYear.forEach(element => {
      monthNum = element.getMonth() + 1
      dayOfMonth = element.getDate()
      printit = ' month: ' + monthNum + ' '
              + getMonthOfYearVerbose(monthNum)
              + ' day of month: ' + dayOfMonth 
              + ' - day of year: ' + getDayOfYear(element) 
              + ' - day of week ' + element.getDay() + ' ' + getDayOfWeekVerbose(element.getDay()) + ' '
              + ' week nbr: ' + getWeekNumber(element) + ' '
              + ' coming up: ' + getMonthOfYearVerbose(getNextMonth(element.getMonth()+1))
      // console.log(printit)
      prepMenu = prepMenu +
`  {
    "month": "${getMonthOfYearVerbose(monthNum)}",
    "plannedDate": "${element}"
  },
`
    });
    prepMenu = prepMenu +
`
]`

try {
  fs.writeFileSync('menuSeeds.json', prepMenu)
} catch (error) {
  // console.error(error)
  console.log("fs.writeFileSync failed - disk is full or folder for this.htmlFileToWrite doesn't exist")
}
console.log(prepMenu)


    // will I need this? https://github.com/excitement-engineer/graphql-iso-date
    // https://www.npmjs.com/package/graphql-date-scalars
    // Load Menu collection for the rest of the current year
    let MenuItem = {
      monthName: String,
      plannedDate: Date,
      meal: [Meal]
    }
    daysOfYear.forEach(element => {
      let humanMonth = element.getMonth() + 1
      // console.log(getMonthOfYearVerbose(humanMonth))

      
    //  const { _id  } = Menu.create(humanMonth);

    //   // const { _id, monthName } = Menu.create(
    //   Menu.create(
    //     // { month:  humanMonth,
    //     //   plannedDate: element.getDate()
    //     // }
    //     { 
    //       month:  humanMonth
    //     }
    //   )

      // MenuItem.monthName = getMonthOfYearVerbose(humanMonth)
      // MenuItem.plannedDate = element

    });

    // ***********************************************************************************
