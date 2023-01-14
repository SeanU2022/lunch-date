const db = require('../config/connection');
const { User, Client, Thought } = require('../models');
const userSeeds = require('./userSeeds.json');
const clientSeeds = require('./clientSeeds.json')
const thoughtSeeds = require('./thoughtSeeds.json');

db.once('open', async () => {
  try {
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

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
