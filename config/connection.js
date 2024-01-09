const mongoose = require('mongoose');
require('dotenv').config();

let mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/filohubDB', mongooseOptions);

const db = mongoose.connection;

// Event listener to handle MongoDB connection events
db.on('connected', () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Close MongoDB connection when Node process ends
process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection closed due to Node process termination');
    process.exit(0);
  });
});

module.exports = db;