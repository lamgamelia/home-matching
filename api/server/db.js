const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
let db;//Variable that points to the real DB.
async function connectToDb() {
	  console.log("connect to db called");
	  const url = 'mongodb://localhost/homey';
	  await mongoose.connect(url);
	  const client = new MongoClient(url, { useNewUrlParser: true });
	  await client.connect();
	  console.log('Connected to Homey MongoDB at', url);
	  db = client.db();
	  return db;
}

(async function () {
    db = await connectToDb();
}) ();

module.exports = {connectToDb, db};