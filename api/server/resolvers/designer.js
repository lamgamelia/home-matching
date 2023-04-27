const { db } = require('../db.js');

async function listDesigner(_, {propertyCondition="",feeLevel=0,propertyType="",designStyle=""})
    {
      let filter = {};
      if (propertyCondition){
        console.log(propertyCondition);
        filter.propertyCondition = {$all:[propertyCondition]};
      }
      if (feeLevel!==0){
        console.log(feeLevel);
        filter.feeLevel = {$lte:feeLevel};
      }
      if (propertyType){
        console.log(propertyType);
        filter.propertyType = {$all:[propertyType]};
      }
      if (designStyle){
        console.log(designStyle);
        filter.designStyle = {$all:[designStyle]};
      }
      const result = await db.collection('designerData').find(filter).toArray();
      return result;
    };


async function addDesigner (_, {newDesigner})
  {
    console.log("Adding message", newDesigner);
    async function getNextSequence(name) {
      const result = await db.collection('designerCounters').findOneAndUpdate(
        {_id: name},
        {$inc: { current: 1 }},
        {returnOriginal: false},
      );
      return result.value.current;
    }
      newDesigner.id = await getNextSequence('fixedindex');

      const result = await db.collection('designerData').insertOne(newDesigner);
      const addedDesigner = await db.collection('designerData').findOne({_id: result.insertedId});
      return addedDesigner;
  };


module.exports = {
    Query: {
        listDesigner
    },
    Mutation: {
		addDesigner
	}
};
