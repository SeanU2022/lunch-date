const db = require('../config/connection');
const Menu = require('../models/Menu');

db.once('open', async () => {
  try {

    db.Menu.find({})

// let menuArray =  Menu.find()
// menuArray.forEach(element => {
//   console.log(element.month + ' ' + element.plannedDate)
// });


} catch (err) {
  console.error(err);
  process.exit(1);
}

console.log('all done!');
process.exit(0);
});