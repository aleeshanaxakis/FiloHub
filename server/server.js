const express = require('express'); 
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { expressMiddleware } = require('@apollo/server/express4');
const mongoose = require('mongoose');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas'); 
const { authMiddleware } = require('./utils/auth'); 
const db = require('./config/connection');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PORT = process.env.PORT || 3001;

const app = express();
// app.use(cors());

// Middleware to parse incoming JSON and URL-encoded requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Authentication middleware
// app.use(authMiddleware);

// Initialize Apollo Server for GraphQL
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ user: req.user }) 
});

async function startServer() {
  await apolloServer.start();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/images', express.static(path.join(__dirname, '../client/images')));

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  // Serve static files from the React app in production
  if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/build')));

      app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
      });
  }

// Start Express server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
}

// Stripe payment intent
app.post('/create-payment-intent', async (req, res) => {
  try {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency: 'aud',
      });

      res.send({
          clientSecret: paymentIntent.client_secret,
      });
  } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(500).send({ error: error.message });
  }
});

startServer();