const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const menuSchema = new Schema({
  month: {
    type: String,
  },
  plannedDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  plannedDayOfYearNumber: {
    type: Number,
  },
  meal:
  {
    type: Schema.Types.ObjectId,
    ref: 'Meal',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Menu = model('Menu', menuSchema);
module.exports = Menu;
