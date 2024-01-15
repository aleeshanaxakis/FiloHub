const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./server/schemas'); // TO DO: define typeDefs and resolvers
const { authmiddleware } = require('./utils/auth'); 

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/filohubDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Initialize Apollo Server for GraphQL
const server = new ApolloServer({ typeDefs, resolvers });

// Apply middleware to integrate Apollo Server with Express
server.applyMiddleware({ app });

// Middleware to parse incoming JSON requests
app.use(express.json());

// TO DO: REST API routes can go here if needed in addition to GraphQL
// For example, you might have routes for non-GraphQL endpoints

// Export the app for testing or other configurations
module.exports = app;