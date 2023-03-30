const express = require('express');
const fs = require('fs');
const path = require('path');
const {ApolloServer, UserInputError} = require('apollo-server-express');
const mongoose = require('mongoose');

const resolvers = require('./resolvers');
/*below codes and resolvers are moved to ./resolvers
const {GraphQLScalarType} = require('graphql');
const {Kind} = require('graphql/language');

let db;
const {connectToDb} = require('./db.js');

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
*/

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
    app.listen(8000, function () {
      console.log('App started on port 8000');
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();


