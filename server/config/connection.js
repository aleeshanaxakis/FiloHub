const mongoose = require('mongoose');
// require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/filohubDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

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