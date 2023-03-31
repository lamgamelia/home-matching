const {GraphQLScalarType} = require('graphql');
const {Kind} = require('graphql/language');

const usersResolvers = require('./users');
const contactsResolvers = require('./contacts');
const reviewResolvers = require('./review');
const galleryResolvers = require('./gallery');

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

module.exports = {
    Query: {
        ...contactsResolvers.Query,
        ...reviewResolvers.Query,
        ...galleryResolvers.Query
    },
    Mutation: {
        ...contactsResolvers.Mutation,
        ...usersResolvers.Mutation,
        ...reviewResolvers.Mutation,
        ...galleryResolvers.Mutation
    },
    GraphQLDate,
};