const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const mealSchema = new Schema({
  name: {
    type: String,
    required: 'You need to add the meal name!',
    minlength: 1,
    maxlength: 70,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  type: {
    type: String,
  },
});

const Meal = model('Meal', mealSchema);

module.exports = Meal;
