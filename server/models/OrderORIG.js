const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const orderSchema = new Schema({
  description: {
    type: String,
    required: 'You need to add the order description!',
    minlength: 1,
    maxlength: 60,
    trim: true,
  },
  schedulceDate: {
    type: Date,
  },
  instructions: {
    type: String,
  },
  quantity: {
    type: Int
  },
  meals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Meal',
    },
  ],
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Client',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Order = model('Order', orderSchema);

module.exports = Order;
