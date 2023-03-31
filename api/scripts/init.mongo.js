db.messageData.remove({});
db.reviewData.remove({});
db.galleryData.remove({});


initMessageData = [{	
				id: 0, 
				name: 'senderName', 
				email: 'senderEmail', 
			 	subject: 'messageSubject', 
				message: 'messageContent', 
				datetime: new Date(),
			   }]

initReviewData =[{
	id: 0,
	name: 'reviewerName',
	email: 'reviewerEmail',
	reviewMessage: 'reviewContent',
	datetime: new Date(),
},
{
	id: 1,
	name: 'reviewerName2',
	email: 'reviewerEmail2',
	reviewMessage: 'reviewContent2',
	datetime: new Date(),
},
{
	id: 2,
	name: 'reviewerName3',
	email: 'reviewerEmail3',
	reviewMessage: 'reviewContent3',
	datetime: new Date(),
},
{
	id: 3,
	name: 'reviewerName4',
	email: 'reviewerEmail4',
	reviewMessage: 'reviewContent4',
	datetime: new Date(),
},
{
	id: 4,
	name: 'reviewerName5',
	email: 'reviewerEmail5',
	reviewMessage: 'reviewContent5',
	datetime: new Date(),
},
{
	id: 5,
	name: 'reviewerName6',
	email: 'reviewerEmail6',
	reviewMessage: 'reviewContent6',
	datetime: new Date(),
},
{
	id: 6,
	name: 'reviewerName7',
	email: 'reviewerEmail7',
	reviewMessage: 'reviewContent7',
	datetime: new Date(),
},
{
	id: 7,
	name: 'reviewerName8',
	email: 'reviewerEmail8',
	reviewMessage: 'reviewContent8',
	datetime: new Date(),
},
{
	id: 8,
	name: 'reviewerName9',
	email: 'reviewerEmail9',
	reviewMessage: 'reviewContent9',
	datetime: new Date(),
}]

const initGalleryData = [{
  id: 1,
  title: 'abc',
  company: 'def',
  propertyType: 'condo',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  datetime: new Date(),
},{
  id: 2,
  title: 'abc',
  company: 'def',
  propertyType: 'hdb',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  datetime: new Date(),
},{
  id: 3,
  title: 'abc',
  company: 'def',
  propertyType: 'condo',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  datetime: new Date(),
},{
  id: 4,
  title: 'abc',
  company: 'def',
  propertyType: 'landed',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  datetime: new Date(),
},{
  id: 5,
  title: 'abc',
  company: 'def',
  propertyType: 'condo',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  datetime: new Date(),
}]

db.messageData.insertMany(initMessageData);
db.reviewData.insertMany(initReviewData);
db.galleryData.insertMany(initGalleryData);

db.messageCounters.remove({ _id: 'fixedindex'});
db.messageCounters.insert({ _id: 'fixedindex', current: 0});
db.reviewCounters.remove({ _id: 'fixedindex'});
db.reviewCounters.insert({ _id: 'fixedindex', current: 0});
db.galleryCounters.remove({ _id: 'fixedindex'});
db.galleryCounters.insert({ _id: 'fixedindex', current: 0});

db.messageData.createIndex({message:{datetime: 1}});
db.reviewData.createIndex({message:{datetime: 1}});
db.galleryData.createIndex({message:{datetime: 1}});

