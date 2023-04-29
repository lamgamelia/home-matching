const { db} = require('../db.js');

async function listMessage(_,{email})
    {
      const messages = await db.collection('messageData').find({
        $or:[
          {email: email},
          {receiveremail: email}
        ]
      }).toArray();
      return messages;
    };

async function sendMessage (_, {newMessage})
  {
    console.log("Adding message", newMessage);
    async function getNextSequence(name) {
      const result = await db.collection('messageCounters').findOneAndUpdate(
        {_id: name},
        {$inc: { current: 1 }},
        {returnOriginal: false},
      );
      return result.value.current;
    }
      newMessage.id = await getNextSequence('fixedindex');

      newMessage.datetime = new Date();
      const result = await db.collection('messageData').insertOne(newMessage);
      const addedMessage = await db.collection('messageData').findOne({_id: result.insertedId});
      return addedMessage;
  };

module.exports = {
  Query: {
    listMessage
  },
	Mutation: {
		sendMessage
	}
};
