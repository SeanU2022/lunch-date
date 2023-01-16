const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const clientSchema = new Schema({
  name: {
    type: String,
    required: 'You need to add the name!',
    minlength: 1,
    maxlength: 60,
    trim: true,
  },
  address: {
    type: String,
    // required: true,
    // required: 'You need to add the address!',
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  town: {
    type: String,
    trim: true,
  },
});

const Client = model('Client', clientSchema);

module.exports = Client;
