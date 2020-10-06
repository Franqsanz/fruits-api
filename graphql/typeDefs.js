const { gql } = require('apollo-server');

const typeDefs = gql`
  type Fruits {
    id: ID
    scientific_name: String
    vulgar_name: String
    origin: String
    harvest_time: String
    life_cycle: String
  }

  type Fruit {
    id: ID
    scientific_name: String
    vulgar_name: String
    origin: String
    harvest_time: String
    life_cycle: String
  }

  type Query {
    Fruit(id: ID!): Fruit
    Fruits: [Fruits]
  }

  type Mutation {
    addFruit(
      id: ID!
      scientific_name: String!
      vulgar_name: String!
      origin: String!
      harvest_time: String!
      life_cycle: String!
    ): Fruits!

    updateFruit(
      id: ID!
      scientific_name: String!
      vulgar_name: String!
      origin: String!
      harvest_time: String!
      life_cycle: String!
    ): Fruits!

    deleteFruit(id: ID!): Fruits!
  }
`;

module.exports = typeDefs;