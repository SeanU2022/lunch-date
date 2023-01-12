const mongoose = require('mongoose');

// (node:34) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option 
// will be switched back to `false` by default in Mongoose 7. 
// Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. 
// Or use `mongoose.set('strictQuery', true);` to suppress this warning.

mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lunch-date',
  // process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
