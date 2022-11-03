<h1 align="center">Fruits API</h1>
<p align="center">
  <a aria-label="Open in Visual Studio Code" href="https://open.vscode.dev/Franqsanz/fruits-api">
    <img alt="Open in Visual Studio Code" src="https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc">
  </a>
  <a aria-label="Netlify Status" href="https://app.netlify.com/sites/fruits-api/deploys">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/dabb6e07-14c2-40af-bf96-2c1a00f43fc9/deploy-status">
  </a>
  <a aria-label="Tests" href="https://github.com/Franqsanz/fruits-api/actions">
    <img alt="License" src="https://github.com/Franqsanz/fruits-api/workflows/Tests/badge.svg">
  </a>
  <a aria-label="License" href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
  </a>
  <a aria-label="GitHub Pull Requests" href="http://makeapullrequest.com">
    <img alt="GitHub Pull Requests" src="https://img.shields.io/badge/PRs-welcome-brightgreen">
  </a>
  <a aria-label="GitHub contributors" href="https://github.com/Franqsanz/fruits-api/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Franqsanz/fruits-api">
  </a>
  <img alt="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103">
  <a aria-label="made-with-javascript" href="https://github.com/Franqsanz/fruits-api/fork">
    <img alt="made-with-javascript" src="https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg?logo=javascript&color=ffc700">
  </a>
</p>

<center><em><a href="readme_es.md">Leer en Español</a></em></center>

---

GraphQL API with fruit tree data.
This API is built with Apollo Server Lambda + Netlify Lambda.

> In this project I am not using a database.
> The data is in [data.js](./src/data/data.js), in case you want to add more information :)

## Contribute
Read the [CONTRIBUTING.md](CONTRIBUTING_eng.md) file or check if there are any [issues](https://github.com/Franqsanz/fruits-api/issues), all PRs are welcome.

## URLs
**Playground:** [https://fruits-api.netlify.app/graphql](https://fruits-api.netlify.app/graphql)

**Web:** [https://fruit-api.netlify.app/](https://fruit-api.netlify.app/)

## Get the code for this project

1. Clone repository:
```sh
git clone https://github.com/Franqsanz/fruits-api.git
```
2. Enter to the repository directory:
```sh
cd fruits-api
```
3. Install all dependencies:
```sh
npm install

# Or with yarn
yarn
```

4. Once all the dependencies are installed run the following command:
```sh
npm start

yarn start
```

5. Run Testing (optional):
```sh
npm test

yarn test
```

As an alternative, you can use Docker

1. Open your terminal/command line
1. Run `docker-compose up`

Once the API is executed, if all goes well you should see in your terminal the following message: `Lambda server is listening on 9000`, open your browser and put in the URL `http://localhost:9000/graphql` and this will load the **GraphQL Playground**, you should see the following:

![playground](./playground.png)

Obviously the playground will be empty, you should make the queries.

## Intruduction
This documentation will help you become familiar with the Fruits API resources and show you how to make different queries.

### API Schema
| Key                 | Type   | Description                               |
| ------------------- | ------ | ----------------------------------------- |
| id                  | ID     | Tree ID                            |
| scientific_name     | String | Scientific name of the tree                |
| tree_name           | String | Tree name                          |
| fruit_name          | String | Fruit name                        |
| family              | String | Tree family type                 |
| origin              | String | Tree origin                          |
| description         | String | Brief tree description                |
| bloom               | String | Flowering date of the tree              |
| maturation_fruit    | String | Fruit ripening date             |
| life_cycle          | String | Tree life cycle                   |
| climatic_zone       | String | Tree climate zone                  |
| producing_countries | Array  | Countries that produce fruit trees. |

### Type `Query`

#### Get all trees
You can access the trees list with the following `query`

Query example:

```graphql
query allFruits {
  fruits {
    id
    scientific_name
    fruit_name
    description
    producing_countries {
      country
    }
  }
}
```

Response:
```json
{
  "data": {
    "fruits": [
      {
        "id": "1",
        "scientific_name": "Malus domestica",
        "fruit_name": "Apple",
        "description": "The apple is the fruit of the apple tree, a tree of the rosaceae family. It is a pome fruit with a round shape and a more or less sweet flavor, depending on the variety. The apple is a deciduous tree, generally 2 to 4.5 m (6 to 15 ft) tall in cultivation and up to 9 m (30 ft) in the wild..",
        "producing_countries": [
          {
            "country": "China",
          },
          {
            "country": "United States",
          },
          // ...
        ]
      },
      {
        "id": "2",
        "scientific_name": "Pyrus Communis",
        "fruit_name": "Pear",
        "description": "The pear is the fruit of the pear tree, a tree of the rosaceae family. The fruit is an edible knob of brownish green. It is a species of deciduous tree, generally 2 to 20 m high.",
        "producing_countries": [
          {
            "country": "China",
          },
          {
            "country": "Italy",
          },
          // ...
        ]
      },

      // ...
    ]
  }
}
```

#### Get a single tree
You can get a single tree by adding the  `id` as parameter: `(id: 5)`.

Query example:

```graphql
query oneFruit {
  fruit(id: 5) {
    id
    scientific_name
    tree_name
    fruit_name
    family
  }
}
```

Response:
```json
{
  "data": {
    "fruit": {
      "id": "5",
      "scientific_name": "Citrus x Tangerina",
      "tree_name": "Tangerine",
      "fruit_name": "Tangerine",
      "family": "Rutaceae"
    }
  }
}
```

#### Tree filtering
You can also filter trees by `family` or  `origin`, for example: `(family: "Rosaceae")` or `(origin: "Asia")`.

Query example:

```graphql
query filterFruit {
 filterFruitsFam(family: "Rosaceae") {
    id
    tree_name
    fruit_name
    family
  }
}
```

Response:
```json
{
  "data": {
    "filterFruitsFam": [
      {
        "id": "1",
        "tree_name": "Apple",
        "fruit_name": "Apple",
        "family": "Rosaceae"
      },
      {
        "id": "2",
        "tree_name": "Pear",
        "fruit_name": "Pear",
        "family": "Rosaceae"
      }
    ]
  }
}
```

### Type `Mutation`
In this API you can make Mutations, although the data will not be stored persistently.
You can add, update and delete.

⚠ **_All fields are required._**

#### How to add a tree

```graphql
mutation addFruit {
 addFruit(
    id: 1
    scientific_name: "Malus Domestica"
    tree_name: "Apple"
    fruit_name: "Apple"
    family: "Rosaceae"
    origin: "Asia Central"
    description: "The Rosaceae apple is the fruit of the apple tree, a tree of the Rosaceae family. It is a pome-shaped fruit"
    bloom: "Spring"
    maturation_fruit: "Late summer or fall"
    life_cycle: "60-80 years"
    climatic_zone: "cold"
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
```

#### How to upgrade a tree

```graphql
mutation updateFruit {
  updateFruit(
    id: 1
    scientific_name: "Malus Domestica"
    tree_name: "Apple"
    fruit_name: "Apple"
    family: "Rosaceae"
    origin: "Central Asia"
    description: "The Rosaceae apple is the fruit of the apple tree, a tree of the Rosaceae family. It is a pome-shaped fruit"
    bloom: "Spring"
    maturation_fruit: "Late summer or fall"
    life_cycle: "60-80 years"
    climatic_zone: "Cold"
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
```

#### How to delete a tree

```graphql
mutation deleteFruit {
 deleteFruit(id: 9) {
   id
   scientific_name
 }
}
```

---
<p align="center">
  Made with ❤ by <a href="https://twitter.com/franqsanz">
    Franco Andrés Sánchez
  </a>
  <br />
  <br />
  <a href="https://www.netlify.com">
    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
  </a>
</p>
