// production: heroku run node ./seeds/seed.js;;
const db = require('../config/connection');
const fs = require('fs');
const dateFormat = require('../utils/dateFormat')

const { User, Client, Meal, Thought } = require('../models');

const userSeeds = require('./userSeeds.json');
const clientSeeds = require('./clientSeeds.json')
const mealSeeds = require('./mealSeeds.json')
const menuSeeds = require('./menuSeeds.json')
const addMenu = require('../schemas/resolvers')
const thoughtSeeds = require('./thoughtSeeds.json');
const Menu = require('../models/Menu');
const Order = require('../models/Order');
const orderSeeds = require('./orderSeedsEmptyMealsArray.json')
// const orderSeeds = require('./orderSeeds.json')
// const {Menu, Meal} = require('../models');

const { getDayOfYear, getWeekNumber, getDayOfWeekVerbose, getMonthOfYearVerbose, getNextMonth } = require('../utils/dateCalcs')
// import { getDayOfYear, getWeekNumber, getDayOfWeekVerbose, getMonthOfYearVerbose } from '../utils/dateCalcs'

db.once('open', async () => {
  try {
    await Order.deleteMany({});
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
      await Client.create(clientSeeds[i]);
    }

    await Meal.create(mealSeeds);

    await Menu.create(menuSeeds);

    await Order.create(orderSeeds);


    // for (let i = 0; i < menuSeeds.length; i++) {
    //   // const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const menu = await Menu.findOneAndUpdate(
    //     { _id: menu },
    //     {
    //       $addToSet: {
    //         meals: "xxx",
    //       },
    //     }
    //   );
    // }


  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
})

