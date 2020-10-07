const { gql } = require('apollo-server');

const typeDefs = gql`
  type Fruits {
    id: ID
    scientific_name: String
    tree_name: String
    fruit_name: String
    family: String
    description: String
    origin: String
    harvest_time: String
    life_cycle: String
    climatic_zone: String
    # producing_countries: countries
  }

  type Fruit {
    id: ID
    scientific_name: String
    tree_name: String
    fruit_name: String
    family: String
    description: String
    origin: String
    harvest_time: String
    life_cycle: String
    climatic_zone: String
    # producing_countries: countries
  }

  type Query {
    Fruit(id: ID!): Fruit
    Fruits: [Fruits]
    FilterFruits(family: String!): [Fruits]
  }

  type Mutation {
    addFruit(
      id: ID!
      scientific_name: String!
      tree_name: String!
      fruit_name: String!
      family: String!
      description: String!
      origin: String!
      harvest_time: String!
      life_cycle: String!
      climatic_zone: String!
    ): Fruits!

    updateFruit(
      id: ID!
      scientific_name: String!
      tree_name: String!
      fruit_name: String!
      family: String!
      description: String!
      origin: String!
      harvest_time: String!
      life_cycle: String!
      climatic_zone: String!
    ): Fruits!

    deleteFruit(id: ID!): Fruits!
  }
`;

module.exports = typeDefs;