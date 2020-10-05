const { gql } = require('apollo-server');

const typeDefs = gql`
  type Fruits {
    id: ID
    scientific_name: String
    name_vulgar: String
  }

  type Fruit {
    id: ID
    scientific_name: String
    name_vulgar: String
  }

  type Query {
    Fruit(id: ID!): Fruit
    Fruits: [Fruits]
  }

  type Mutation {
    addFruit(id: ID! scientific_name: String! name_vulgar: String!): Fruits!
    updateFruit(id: ID! scientific_name: String! name_vulgar: String!): Fruits!
    deleteFruit(id: ID!): Fruits!
  }
`;

module.exports = typeDefs;