const fruits = require('../fruits');

const resolvers = {
  Query: {
    Fruits: () => fruits,
    Fruit: (_, { id }) => fruits.find(fruit => fruit.id == id)
  },
  Mutation: {
    addFruit: (_, args) => {
      const { id, scientific_name, name_vulgar } = args;

      const newFruit = {
        id: id,
        scientific_name: scientific_name,
        name_vulgar: name_vulgar
      }
      fruits.push(newFruit);
      return newFruit;
    },
    updateFruit: (_, args) => {
      const { id, scientific_name, name_vulgar } = args;

      const body = {
        id: id,
        scientific_name: scientific_name,
        name_vulgar: name_vulgar
      }
      const index = fruits.find((fruit) => fruit.id == args.id);
      if (index) Object.keys(body).forEach((key) => (index[key] = body[key]));
      return body
    },
    deleteFruit: (_, { id }) => {
      const deleteOne = fruits.findIndex(fruit => fruit.id == id);
      if (deleteOne > -1) return fruits.splice(deleteOne, 1)
      return deleteOne
    }
  }
}

module.exports = resolvers;