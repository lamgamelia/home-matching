const express = require('express');
const fs = require('fs');
const path = require('path');
const {ApolloServer, UserInputError} = require('apollo-server-express');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');

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


