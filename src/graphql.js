const { ApolloServer } = require('apollo-server-lambda');
const { typeDefs, resolvers } = require('./graphql/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  debug: true,
  cors: true,
});

exports.handler = server.createHandler();