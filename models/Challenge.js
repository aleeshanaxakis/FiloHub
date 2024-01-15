const { Schema } = requre('mongoose');
const dateFormat = require('../utils/dateFormat');

const challengeSchema = new Schema({
    username: [
{
    type: String,
    required: true,
}
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
},
title: {
    type: String,
    required: true
},
challengeBody: {
    type: String,
    required: true,
},
})

module.exports = Challenge;