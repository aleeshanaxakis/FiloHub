const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/filohubDB')

const db = mongoose.connection;

// Event listener to handle MongoDB connection events
// db.on('connected', () => {
//   console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
// });

// db.on('error', (err) => {
//   console.error(`MongoDB connection error: ${err}`);
// });

// db.on('disconnected', () => {
//   console.log('Disconnected from MongoDB');
// });

// // Close MongoDB connection when Node process ends
// process.on('SIGINT', () => {
//   db.close(() => {
//     console.log('MongoDB connection closed due to Node process termination');
//     process.exit(0);
//   });
// });

module.exports = db;