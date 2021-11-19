const { ApolloServer, gql } = require('apollo-server-lambda');
const { createTestClient } = require("apollo-server-testing");
const { typeDefs, resolvers } = require('../graphql/index');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { query, mutate } = createTestClient(server);

// test("All family", async () => {
//   const ALL_FRUIT = gql`
//     query {
//       fruits {
//         id
//         family
//       }
//     }
//   `;

//   const {
//     data: { fruits }
//   } = await query({ query: ALL_FRUIT });

//   expect(fruits).toEqual({ id, family });
// });

test("Find one family", async () => {
  const ONE_FRUIT = gql`
    query {
      fruit(id: "1") {
        id
        family
      }
    }
  `;

  const {
    data: { fruit }
  } = await query({ query: ONE_FRUIT });

  expect(fruit).toEqual({ id: "1", family: "Rosaceae" });
});
