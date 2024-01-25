const db = require('../config/connection');
const { User, Challenge } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./challengeSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Challenge', 'challenges');

    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < challengeSeeds.length; i++) {
      const { _id, creator } = await Challenge.create(challengeSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: creator },
        {
          $addToSet: {
            chalenges: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
