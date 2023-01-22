const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema({
  month: {
    type: String,
  },
  plannedDate: {
    type: Date,
  },
  plannedDayOfYearNumber: {
    type: Number,
  },
  plannedWeekOfYearNumber: {
    type: Number,
  },
  plannedDayOfMonthNumber: {
    type: Number
  },
  plannedDayOfWeekNumber: {
    type: Number
  },
  plannedDayOfWeek: {
    type: String
  },
  quantity: {
    type: Number
  },
  orderText: {
    type: String,
    minlength: 0,
    maxlength: 40,
    trim: true,
  },
  todaysMeal: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  
  // meals: [
  //   {
  //     mealText: {
  //       type: String,
  //       minlength: 0,
  //       maxlength: 60,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

const Order = model('Order', orderSchema);

module.exports = Order;
