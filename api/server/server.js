const fs = require('fs');
const express = require('express');
const path = require('path');
const {ApolloServer, UserInputError} = require('apollo-server-express');
const {GraphQLScalarType} = require('graphql');
const {Kind} = require('graphql/language');
const {connectToDb} = require('./db.js');
let db;

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'A Date() type in GraphQL as a scalar',
  serialize(value){
    return value.toISOString();
  },
  parseValue(value){
    return new Date(value);
  },
  parseLiteral(ast){
    return (ast.kind == Kind.STRING) ? new Date(ast.value): undefined;
  },
})

const projectDB = [{
  id: 1,
  title: 'abc',
  company: 'def',
  propertyType: 'condo',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  created: '2023-03-17',
},{
  id: 2,
  title: 'abc',
  company: 'def',
  propertyType: 'hdb',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  created: '2023-03-17',
},{
  id: 3,
  title: 'abc',
  company: 'def',
  propertyType: 'condo',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  created: '2023-03-17',
},{
  id: 4,
  title: 'abc',
  company: 'def',
  propertyType: 'landed',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  created: '2023-03-17',
},{
  id: 5,
  title: 'abc',
  company: 'def',
  propertyType: 'condo',
  propertySize: 500,
  designStyle1: 'modern',
  designStyle2: 'nil',
  noOfBedrooms: 3 ,
  created: '2023-03-17',
}]


function projectList(){
  return projectDB;
}

function projectView(_,{id}){
  return projectDB[id-1];
}

function projectAdd(_,{newProject}){
  newProject.created = new Date();
  newProject.id = projectDB.length + 1;
  projectDB.push(newProject);
  return projectDB[projectDB.length -1]
}

async function listMessage()
{
  const messages = await db.collection('messageData').find({}).toArray();
  return messages;
}

async function addMessage (_, {newMessage})
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
}

const resolvers = {
  Query:{
    projectList,
    projectView,
    listMessage,
  },
  Mutation:{
    projectAdd,
    addMessage,
  },
  GraphQLDate,
}


const app = express();

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
  formatError: error => {
    console.log(error);
    return error;
  }
})

server.applyMiddleware({app, path: '/graphql'});

(async function () {
  try {
    db = await connectToDb();
    app.listen(8000, function () {
      console.log('App started on port 8000');
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();


