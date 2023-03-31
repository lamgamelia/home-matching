const { db } = require('../db.js');

async function listReview()
    {
      const messages = await db.collection('reviewData').find({}).toArray();
      return messages;
    };

    
async function addReview (_, {newReview})
  {
    console.log("Adding message", newReview);
    async function getNextSequence(name) {
      const result = await db.collection('reviewCounters').findOneAndUpdate(
        {_id: name},
        {$inc: { current: 1 }},
        {returnOriginal: false},
      );
      return result.value.current;
    }
      newReview.id = await getNextSequence('fixedindex');

      newReview.datetime = new Date();
      const result = await db.collection('reviewData').insertOne(newReview);
      const addedReview = await db.collection('reviewData').findOne({_id: result.insertedId});
      return addedReview;
  };

module.exports = {
    Query: {
        listReview
    },
    Mutation: {
		addReview
	}
};
