db.messageData.remove({});
db.reviewData.remove({});
db.galleryData.remove({});
db.designerData.remove({});


initMessageData = [{	
  id: 0, 
  name: 'Alex', 
  email: 'alex@gmail.com',
  company: 'designer.co',
  receiveremail: 'cxloh.eric@gmail.com', 
  message: 'Hi Eric, I am Alex from designer.co', 
  datetime: new Date(),
},
{	
  id: 1, 
  name: 'Chris', 
  email: 'chris@gmail.com', 
  company: 'designyourhome.co',
  receiveremail: 'cxloh.eric@gmail.com',
  message: 'Hi Eric, I am Chris from designyourhome.co', 
  datetime: new Date(),
},
{	
  id: 2, 
  name: 'Eric', 
  email: 'cxloh.eric@gmail.com',
  company: '',
  receiveremail: 'alex@gmail.com', 
  message: 'Hi Alex, how much does it cost to renovate a 3-room hdb?', 
  datetime: new Date(),
},
{	
  id: 3, 
  name: 'Alex', 
  email: 'alex@gmail.com',
  company: 'designer.co',
  receiveremail: 'cxloh.eric@gmail.com', 
  message: 'roughly $50,000', 
  datetime: new Date(),
},
]

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
  propertyType: 'Condo',
  propertySize: 500,
  designStyle1: 'Modern',
  designStyle2: 'Nil',
  noOfBedrooms: 3 ,
  datetime: new Date(),
},{
  id: 2,
  title: 'abc',
  company: 'def',
  propertyType: 'Hdb',
  propertySize: 500,
  designStyle1: 'Modern',
  designStyle2: 'Nil',
  noOfBedrooms: 3 ,
  datetime: new Date(), 
},{
  id: 3,
  title: 'abc',
  company: 'def',
  propertyType: 'Condo',
  propertySize: 500,
  designStyle1: 'Modern',
  designStyle2: 'Nil',
  noOfBedrooms: 3 ,
  datetime: new Date(),
},{
  id: 4,
  title: 'abc',
  company: 'def',
  propertyType: 'Landed',
  propertySize: 500,
  designStyle1: 'Modern',
  designStyle2: 'Nil',
  noOfBedrooms: 3 ,
  datetime: new Date(),
},{
  id: 5,
  title: 'abc',
  company: 'def',
  propertyType: 'Condo',
  propertySize: 500,
  designStyle1: 'Modern',
  designStyle2: 'Nil',
  noOfBedrooms: 7 ,
  datetime: new Date(),
},{
  id: 6,
  title: 'abc',
  company: 'def',
  propertyType: 'Hdb',
  propertySize: 500,
  designStyle1: 'Artistic',
  designStyle2: 'Modern',
  noOfBedrooms: 3 ,
  datetime: new Date(),
}]


const initDesignerData = [
  {id:1,
  title : 'No1 Deisgner',
  designStyle: ['Modern','Traditional'],
  description: 'Designer focus in modern style',
  propertyCondition: ['New','Resale'],
  propertyType: ['Condo','HDB','Land','Commercial'],
  feeLevel:2,
  email: 'designer1@email.com',
  mobile: '000001',},

  {id:2,
  title : 'No2 Deisgner',
  designStyle: ['Artistic','Traditional'],
  description: 'Designer focus in artistic style',
  propertyCondition: ['Resale'],
  propertyType: ['Condo','HDB','Commercial'],
  feeLevel:1,
  email: 'designer2@email.com',
  mobile: '000002',},

  {id:3,
  title : 'No3 Deisgner',
  designStyle: ['Traditional'],
  description: 'Designer focus in artistic style',
  propertyCondition: ['New'],
  propertyType: ['Condo'],
  feeLevel:3,
  email: 'designer3@email.com',
  mobile: '000003',},

  {id:4,
  title : 'No3 Deisgner',
  designStyle: ['Artistic','Traditional'],
  description: 'Designer focus in artistic style',
  propertyCondition: ['New','Resale'],
  propertyType: ['Condo','HDB','Commercial'],
  feeLevel:4,
  email: 'designer4@email.com',
  mobile: '000004',},

  {id:5,
  title : 'No3 Deisgner',
  designStyle: ['Modern'],
  description: 'Designer focus in artistic style',
  propertyCondition: ['New','Resale'],
  propertyType: ['Condo','HDB','Land'],
  feeLevel:2,
  email: 'designer5@email.com',
  mobile: '000005',},

  
  {id:6,
  title : 'No3 Deisgner',
  designStyle: ['Artistic','Traditional'],
  description: 'Designer focus in artistic style',
  propertyCondition: ['New','Resale'],
  propertyType: ['Condo','HDB'],
  feeLevel:1,
  email: 'designer6@email.com',
  mobile: '000006',},
  
  {id:7,
  title : 'No3 Deisgner',
  designStyle: ['Modern','Artistic'],
  description: 'Designer focus in artistic style',
  propertyCondition: ['New','Resale'],
  propertyType: ['Condo','HDB','Land'],
  feeLevel:1,
  email: 'designer7@email.com',
  mobile: '000007',},

]


db.messageData.insertMany(initMessageData);
db.reviewData.insertMany(initReviewData);
db.galleryData.insertMany(initGalleryData);
db.designerData.insertMany(initDesignerData);

db.messageCounters.remove({ _id: 'fixedindex'});
db.messageCounters.insert({ _id: 'fixedindex', current: 3});
db.reviewCounters.remove({ _id: 'fixedindex'});
db.reviewCounters.insert({ _id: 'fixedindex', current: 0});
db.galleryCounters.remove({ _id: 'fixedindex'});
db.galleryCounters.insert({ _id: 'fixedindex', current: 0});
db.designerCounters.remove({ _id: 'fixedindex'});
db.designerCounters.insert({ _id: 'fixedindex', current: 0});

db.messageData.createIndex({message:{datetime: 1}});
db.reviewData.createIndex({message:{datetime: 1}});
db.galleryData.createIndex({message:{datetime: 1}});
db.designerData.createIndex({message:{datetime: 1}});
