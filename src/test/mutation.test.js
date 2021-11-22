const { ApolloServer, gql } = require('apollo-server-lambda');
const { createTestClient } = require("apollo-server-testing");
const { typeDefs, resolvers } = require('../graphql/index');

const server = new ApolloServer({ typeDefs, resolvers });

const { mutate } = createTestClient(server);

test("Add fruit", async () => {
  const ADD_FRUIT = gql`
    mutation {
     addFruit(
      id: "0"
      scientific_name: "Malus Domestica"
      tree_name: "Manzano"
      fruit_name: "Manzana"
      family: "Rosaceae"
      origin: "Asia Central"
      description: "La RosaceaeRosaceaemanzana es el fruto del manzano, árbol de la familia de las rosáceas. Es una fruta pomácea de forma"
      bloom: "Primavera"
      maturation_fruit: "Finales del verano o otoño"
      life_cycle: "60-80 años"
      climatic_zone: "Frio"
  ) {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      description
      bloom
      maturation_fruit
      life_cycle
      climatic_zone
    }
  }
  `;

  const {
    data: { addFruit }
  } = await mutate({ mutation: ADD_FRUIT });

  expect(addFruit).toEqual({
    id: "0",
    scientific_name: "Malus Domestica",
    tree_name: "Manzano",
    fruit_name: "Manzana",
    family: "Rosaceae",
    origin: "Asia Central",
    description: "La RosaceaeRosaceaemanzana es el fruto del manzano, árbol de la familia de las rosáceas. Es una fruta pomácea de forma",
    bloom: "Primavera",
    maturation_fruit: "Finales del verano o otoño",
    life_cycle: "60-80 años",
    climatic_zone: "Frio"
  });
});

test("Update fruit", async () => {
  const UPDATE_FRUIT = gql`
    mutation {
     updateFruit(
      id: "0"
      scientific_name: "Malus Domestica"
      tree_name: "Manzano"
      fruit_name: "Manzana"
      family: "Rosaceae"
      origin: "Asia Central"
      description: "La RosaceaeRosaceaemanzana es el fruto del manzano, árbol de la familia de las rosáceas. Es una fruta pomácea de forma"
      bloom: "Primavera"
      maturation_fruit: "Finales del verano o otoño"
      life_cycle: "60-80 años"
      climatic_zone: "Frio"
  ) {
      id
      scientific_name
      tree_name
      fruit_name
      family
      origin
      description
      bloom
      maturation_fruit
      life_cycle
      climatic_zone
    }
  }
  `;

  const {
    data: { updateFruit }
  } = await mutate({ mutation: UPDATE_FRUIT });

  expect(updateFruit).toEqual({
    id: "0",
    scientific_name: "Malus Domestica",
    tree_name: "Manzano",
    fruit_name: "Manzana",
    family: "Rosaceae",
    origin: "Asia Central",
    description: "La RosaceaeRosaceaemanzana es el fruto del manzano, árbol de la familia de las rosáceas. Es una fruta pomácea de forma",
    bloom: "Primavera",
    maturation_fruit: "Finales del verano o otoño",
    life_cycle: "60-80 años",
    climatic_zone: "Frio"
  });
});

test("Delete fruit", async () => {
  const DELETE_FRUIT = gql`
    mutation {
      deleteFruit(id: "3") {
        id
      }
    }
  `;

  const {
    data: { deleteFruit }
  } = await mutate({ mutation: DELETE_FRUIT });

  expect(deleteFruit).toEqual({ id: null });
});
