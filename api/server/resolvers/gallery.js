const { db } = require('../db.js');

async function listGallery(_,{propertyType = "", designStyle = "", noOfBedrooms = 0}) {
  const filter = {};
  if (propertyType) {
    filter.propertyType = propertyType;
  }
  if (designStyle) {
    filter.$or = [
      { designStyle1: designStyle },
      { designStyle2: designStyle }
      ];
  }
  if (noOfBedrooms) {
    if (noOfBedrooms<6){
      filter.noOfBedrooms = noOfBedrooms;
    }
    else
    {
      filter.noOfBedrooms = {$gt : 5}
    }
  }

  const galleries = await db.collection('galleryData').find(filter).toArray();
  return galleries;
}


async function addGallery (_, {newGallery})
  {
    console.log("Adding gallery", newGallery);
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
