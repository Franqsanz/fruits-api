const fruits = require('../fruits');

const resolvers = {
  Query: {
    Fruits: () => fruits,
    Fruit: (_, { id }) => fruits.find(fruit => fruit.id == id)
  },
  Mutation: {
    addFruit: (_, args) => {
      const {
        id,
        scientific_name,
        vulgar_name,
        origin,
        harvest_time,
        life_cycle
      } = args;

      const newFruit = {
        id: id,
        scientific_name: scientific_name,
        vulgar_name: vulgar_name,
        origin: origin,
        harvest_time: harvest_time,
        life_cycle: life_cycle
      };

      fruits.push(newFruit);
      return newFruit;
    },
    updateFruit: (_, args) => {
      const {
        id,
        scientific_name,
        vulgar_name,
        origin,
        harvest_time,
        life_cycle
      } = args;

      const body = {
        id: id,
        scientific_name: scientific_name,
        vulgar_name: vulgar_name,
        origin: origin,
        harvest_time: harvest_time,
        life_cycle: life_cycle
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