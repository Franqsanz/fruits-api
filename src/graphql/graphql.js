const { ApolloServer } = require('apollo-server-lambda');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  debug: true,
  cors: true,
});

exports.handler = server.createHandler();