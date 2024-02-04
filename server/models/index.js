const mongoose = require('mongoose');

const User = require('./User');
const Challenge = require('./Challenge');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = { User, Challenge };