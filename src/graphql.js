const { ApolloServer } = require('apollo-server-lambda');
const { typeDefs, resolvers } = require('./graphql/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  cors: { origin: '*' }
});

exports.handler = server.createHandler();