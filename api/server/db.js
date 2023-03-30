const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost/homey';

// create a new MongoDB client and connect to the database
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected to Homey MongoDB at', url);
    return mongoose.connect(url);
  })
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// expose the MongoDB client and database
const db = client.db();
module.exports = { client, db };
