const { User, Challenge } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const axios = require('axios'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const stripe = require stripe

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('challenges');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('challenges');
      },
      challenges: async () => {
        return Challenge.find();
      },
      challenge: async (parent, { challengeId }) => {
        return Challenge.findByID(challengeId);
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('challenges');
        }
        throw AuthenticationError;
      },
    },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw AuthenticationError;
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw AuthenticationError;
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      addChallenge: async (parent, { title, challengeBody }, context) => {
        if (context.user) {
          const challenge = await Challenge.create({
            creator: context.user.username,
            title,
            challengeBody,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { challenges: challenge._id } }
          );
  
          return challenge;
        }
        throw AuthenticationError;
        ('You need to be logged in!');
      },
      editChallenge: async (parent, { challengeId, title, challengeBody }, context) => {
        // Implement logic to edit a challenge
      },
      deleteChallenge: async (parent, { challengeId }, context) => {
        if (context.user) {
          const challenge = await Challenge.findOneAndDelete({
            _id: challengeId,
            thoughtAuthor: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { challenges: challenge._id } }
          );
  
          return challenge;
        }
        throw AuthenticationError;
      },
      joinChallenge: async (parent, { challengeId, userId }, context) => {
        // Impleme3nt logic for joining a challenge
            },
      leaveChallenge: async (parent, { challengeId, userId }, context) => {
        // Impleme3nt logic for joining a challenge
        },
      },
    },
  
  module.exports = resolvers;
  