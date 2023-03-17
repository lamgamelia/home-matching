const fs = require('fs');
const express = require('express');
const path = require('path');
const {ApolloServer} = require('apollo-server-express');
const {GraphQLScalarType} = require('graphql');
const {Kind} = require('graphql/language');

const app = express();

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

const resolvers = {
  Query:{
    projectList,
    projectView,
  },
  Mutation:{
    projectAdd,
  },
  GraphQLDate,
}

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

app.use(express.static(path.join(__dirname, '../public')));

app.use('/node_modules/bootstrap/dist/css/bootstrap.min.css', (req, res, next) => {
  res.type('text/css');
  res.sendFile(path.join(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.min.css'));
});

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
})

server.applyMiddleware({app, path: '/graphql'})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/homey.html'));
});

app.listen(3000, function () {
  console.log('App started on port 3000');
});


