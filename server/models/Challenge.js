const mongoose = require('mongoose');

const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const challengeSchema = new Schema({
creator: {
    type: String, 
    required: true,
},
participants: [
    {
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
}],
createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
title: {
    type: String,
    required: true,
},
challengeBody: {
    type: String,
    required: true,
},
})

module.exports = Challenge;