const fruits = require('../fruits');

const resolvers = {
  Query: {
    Fruits: () => fruits,
    // Filtrado por "categoria", debo utilizar una regex.
    FruitsFilter: (_, { category }) => fruits.filter(fruit => fruit.category == category),
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
        life_cycle,
        climatic_zone,
        category
      } = args;

      const newFruit = {
        id: id,
        scientific_name: scientific_name,
        vulgar_name: vulgar_name,
        origin: origin,
        harvest_time: harvest_time,
        life_cycle: life_cycle,
        climatic_zone: climatic_zone,
        category: category
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
        life_cycle,
        climatic_zone,
        category
      } = args;

      const body = {
        id: id,
        scientific_name: scientific_name,
        vulgar_name: vulgar_name,
        origin: origin,
        harvest_time: harvest_time,
        life_cycle: life_cycle,
        climatic_zone: climatic_zone,
        category: category
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