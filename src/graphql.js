const { ApolloServer } = require('apollo-server-lambda');
const depthLimit = require('graphql-depth-limit');

const { typeDefs, resolvers } = require('./graphql/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  validationRules: [depthLimit(2)], // Limitar la profundidad de la consulta.
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});
