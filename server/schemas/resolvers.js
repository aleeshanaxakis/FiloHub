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
        if (context.user) {
          const challenge = await Challenge.findOneAndUpdate({
            _id: challengeId,
            title,
            challengeBody,
          })
        }
      },
      deleteChallenge: async (parent, { challengeId }, context) => {
        if (context.user) {
          const challenge = await Challenge.findOneAndDelete({
            _id: challengeId,
            creator: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { challenges: challenge._id } }
          );
  
          return challenge;
        }
        throw AuthenticationError;
      },
      joinChallenge: async (parent, { challengeId, name }, context) => {
        if (context.user) {
          const challenge = await Challenge.findOneAndUpdate(
          {
            _id: challengeId,
          },
          {
           $push: { participants: name } 
          },
          {
            new: true
          }
          )
        }
            },
      leaveChallenge: async (parent, { challengeId, name }, context) => {
        if (context.user) {
          const challenge = await Challenge.findOneAndUpdate(
            {
              _id: challengeId,
            },
            {
              $pull: { participants: name }
            },
            {
              new: true
            }
          )
        }
        },
      },
    }
  
// This function is called after verifying the user's credentials
function generateToken(user) {
  const tokenPayload = {
    id: user.id,
    username: user.username,
    role: user.role, // Include the user's role in the token payload
  };

  return jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

  module.exports = resolvers;
  