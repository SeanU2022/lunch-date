// production: heroku run node ./seeds/seed.js;;
const db = require('../config/connection');
const dateFormat = require('../utils/dateFormat')
// import moment from 'moment'

const { User, Client, Thought, Meal } = require('../models');

const userSeeds = require('./userSeeds.json');
const clientSeeds = require('./clientSeeds.json')
const mealSeeds = require('./mealSeeds.json')
const menuSeeds = require('./menuSeeds.json')
const thoughtSeeds = require('./thoughtSeeds.json');
const Menu = require('../models/Menu');


const getDayOfYear = (date = new Date()) => {
  const timestamp1 = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const timestamp2 = Date.UTC(date.getFullYear(), 0, 0);
  const differenceInMilliseconds = timestamp1 - timestamp2;
  const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;
  return differenceInDays;
};

const getWeekNumber = (date = new Date()) => {
  currentDate = new Date();
  let startDate = new Date(currentDate.getFullYear(), 0, 1);
  let days = Math.floor((currentDate - startDate) /(24 * 60 * 60 * 1000));       
  return Math.ceil(days / 7);
}



console.log('hello sean')

const today = new Date();
console.log(today.getFullYear());


const startDate = new Date();
const thisYear = startDate.getFullYear();
let nDate = new Date(thisYear, 11, 31) // Dec 30th thisYear
let endDate = nDate
endDate.setDate(nDate.getDate() + 1);  // Dec 31st thisYear

console.log('script')
let test



let daysOfYear = [];
for (let day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {

  // console.log( day.getDay() )
  
    // 0 for Sunday, 6 for Saturday    
    if ((day.getDay() != 0)  &&  (day.getDay() != 6)) {
      daysOfYear.push(new Date(day));
    }

    //  console.log(dayOfYear(today))
}

let printit

let monthNum

daysOfYear.forEach(element => {

  monthNum = element.getMonth()+1

  printit = ' month: ' + monthNum + ' - day of year: ' + getDayOfYear(element) + ' - day of week ' + element.getDay() + ' week nbr: ' + getWeekNumber(element)
  console.log(printit)
});


// let startDate = new Date(2017, 0, 1); // Jan 1st 2017
// let endDate = new Date(); // today

// let daysOfYear = [];
// for (let day = startDate;day <= endDate; day.setDate(day.getDate() + 1)) {
//      daysOfYear.push(new Date(day)); 
// }


// return

db.once('open', async () => {
  try {
    await Menu.deleteMany({});
    await Meal.deleteMany({});
    await Client.deleteMany({});
    await Thought.deleteMany({});
    await User.deleteMany({});


    await User.create(userSeeds);

    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }

    for (let i = 0; i < clientSeeds.length; i++) {
      // const client = await Client.create(clientSeeds[i]);
      await Client.create(clientSeeds[i]);
    }

    await Meal.create(mealSeeds);


  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
