
const { MongoClient } = require('mongodb');
let db;//Variable that points to the real DB.
async function connectToDb() {
	  console.log("connect to db called");
	  const url = 'mongodb://localhost/homey';
	  const client = new MongoClient(url, { useNewUrlParser: true });
	  await client.connect();
	  console.log('Connected to Homey MongoDB at', url);
	  db = client.db();
	  return db;
}

module.exports = {connectToDb};