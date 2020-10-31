const fruits = require('../data/data');

const resolvers = {
  Query: {
    fruits: () => fruits,
    // Filtrado por "Familia" o "Origen", ¿debo utilizar una regex?.
    filterFruitsFam: (_, { family }) => {
      return fruits.filter(fruit => fruit.family == family);
    },
    filterFruitsOri: (_, { origin }) => {
      return fruits.filter(fruit => fruit.origin == origin);
    },
    fruit: (_, { id }) => fruits.find(fruit => fruit.id == id)
  },
  Mutation: {
    addFruit: (_, args) => {
      const {
        id,
        scientific_name,
        tree_name,
        fruit_name,
        family,
        origin,
        description,
        bloom,
        maturation_fruit,
        life_cycle,
        climatic_zone,
      } = args;

      const newFruit = {
        id: id,
        scientific_name: scientific_name,
        tree_name: tree_name,
        fruit_name: fruit_name,
        family: family,
        origin: origin,
        description: description,
        bloom: bloom,
        maturation_fruit: maturation_fruit,
        life_cycle: life_cycle,
        climatic_zone: climatic_zone,
      };

      fruits.push(newFruit);
      return newFruit;
    },
    updateFruit: (_, args) => {
      const {
        id,
        scientific_name,
        tree_name,
        fruit_name,
        family,
        origin,
        description,
        bloom,
        maturation_fruit,
        life_cycle,
        climatic_zone,
      } = args;

      const body = {
        id: id,
        scientific_name: scientific_name,
        tree_name: tree_name,
        fruit_name: fruit_name,
        family: family,
        origin: origin,
        description: description,
        bloom: bloom,
        maturation_fruit: maturation_fruit,
        life_cycle: life_cycle,
        climatic_zone: climatic_zone,
      };

      const index = fruits.find((fruit) => fruit.id == args.id);
      if (index) Object.keys(body).forEach((key) => (index[key] = body[key]));
      return body;
    },
    deleteFruit: (_, { id }) => {
      const deleteOne = fruits.findIndex(fruit => fruit.id == id);
      if (deleteOne > -1) return fruits.splice(deleteOne, 1);
    }
  }
}

module.exports = resolvers;