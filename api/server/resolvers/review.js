const { db } = require('../db.js');
//const checkAuth = require('../util/check-auth.js');

async function listReview()
    {
      const messages = await db.collection('reviewData').aggregate([{$sort : { id: -1}}]).toArray();
      return messages;
    };

    
async function addReview (_, {newReview})//, context)
  {
    //const user = checkAuth(context);
    const body = newReview.reviewMessage;
    if (body.trim() === '') {
      throw new Error('Post body must not be empty');
    }
    
    async function getNextSequence(name) {
      const result = await db.collection('reviewCounters').findOneAndUpdate(
        {_id: name},
        {$inc: { current: 1 }},
        {returnOriginal: false},
      );
      return result.value.current;
    }
      newReview.id = await getNextSequence('fixedindex');
      //newReview.name = user.username;
      //newReview.email = user.email;
      newReview.datetime = new Date();
      console.log("Adding review", newReview);
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
