const { ApolloServer } = require('apollo-server-lambda');
const depthLimit = require('graphql-depth-limit');
const { typeDefs, resolvers } = require('./graphql/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  // Limitar la profundidad de la consulta.
  validationRules: [depthLimit(1)],
  cors: { origin: '*' }
});

exports.handler = server.createHandler();