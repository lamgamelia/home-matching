const { db } = require('../db.js');

async function listGallery()
    {
      const messages = await db.collection('galleryData').find({}).toArray();
      return messages;
    };

async function addGallery (_, {newGallery})
  {
    console.log("Adding message", newGallery);
    async function getNextSequence(name) {
      const result = await db.collection('galleryCounters').findOneAndUpdate(
        {_id: name},
        {$inc: { current: 1 }},
        {returnOriginal: false},
      );
      return result.value.current;
    }
      newGallery.id = await getNextSequence('fixedindex');

      newGallery.datetime = new Date();
      const result = await db.collection('galleryData').insertOne(newGallery);
      const addedGallery = await db.collection('galleryData').findOne({_id: result.insertedId});
      return addedGallery;
  };

module.exports = {
    Query: {
        listGallery
    },
    Mutation: {
		  addGallery
	}
};
