const { gql } = require('apollo-server');

const typeDefs = gql`
  type Fruits {
    id: ID
    scientific_name: String
    vulgar_name: String
    origin: String
    harvest_time: String
    life_cycle: String
    climatic_zone: String
    category: String
    # producing_countries: countries
  }

  type Fruit {
    id: ID
    scientific_name: String
    vulgar_name: String
    origin: String
    harvest_time: String
    life_cycle: String
    climatic_zone: String
    category: String
    # producing_countries: countries
  }

  type Query {
    Fruit(id: ID!): Fruit
    Fruits: [Fruits]
    FruitsFilter(category: String!): [Fruits]
  }

  type Mutation {
    addFruit(
      id: ID!
      scientific_name: String!
      vulgar_name: String!
      origin: String!
      harvest_time: String!
      life_cycle: String!
      climatic_zone: String!
      category: String!
    ): Fruits!

    updateFruit(
      id: ID!
      scientific_name: String!
      vulgar_name: String!
      origin: String!
      harvest_time: String!
      life_cycle: String!
      climatic_zone: String!
      category: String!
    ): Fruits!

    deleteFruit(id: ID!): Fruits!
  }
`;

module.exports = typeDefs;