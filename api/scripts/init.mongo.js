db.messageData.remove({});

initMessageData = [{	
				id: 0, 
				name: 'senderName', 
				email: 'senderEmail', 
			 	subject: 'messageSubject', 
				message: 'messageContent', 
				datetime: new Date(),
			   }]

db.messageData.insertMany(initMessageData);

db.messageCounters.remove({ _id: 'fixedindex'});
db.messageCounters.insert({ _id: 'fixedindex', current: 0});

db.messageData.createIndex({message:{datetime: 1}});


