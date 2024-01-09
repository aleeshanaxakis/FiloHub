const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql'); // TO DO: define typeDefs and resolvers

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

// Serve static assets in production (e.g., React build folder) TO DO check directory name
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });