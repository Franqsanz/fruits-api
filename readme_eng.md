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
</p>

---

GraphQL API with fruit tree data.
This API is built with Apollo Server Lambda + Netlify Lambda.

> In this project I am not using a database.
> The data is in [data.js](./src/data/data.js), in case you want to add more information :)

## Contribute
Read the [CONTRIBUTING.md](CONTRIBUTING.md) file or check if there are any [issues](https://github.com/Franqsanz/fruits-api/issues), all PRs are welcome.

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

#### Consigue todos los árboles
Puede acceder a la lista de los árboles con la siguiente `query`

Query de ejemplo:

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

Respuesta:
```json
{
  "data": {
    "fruits": [
      {
        "id": "1",
        "scientific_name": "Malus Domestica",
        "fruit_name": "Manzana",
        "description": "La manzana es el fruto del manzano, árbol de la familia de las rosáceas. Es una fruta pomácea de forma redonda y sabor más o menos dulce, dependiendo de la variedad. La manzana es un árbol caducifolio, generalmente de 2 a 4,5 m (6 a 15 pies) de altura en cultivo y hasta 9 m (30 pies) en la naturaleza.",
        "producing_countries": [
          {
            "country": "China",
          },
          {
            "country": "Estados Unidos",
          },
          // ...
        ]
      },
      {
        "id": "2",
        "scientific_name": "Pyrus Communis",
        "fruit_name": "Pera",
        "description": "La pera es el fruto del peral, árbol de la familia de las rosáceas. El fruto es un pomo comestible de verde marron. Es una especie de árbol caducifolio, generalmente de 2 hasta 20 m de altura.",
        "producing_countries": [
          {
            "country": "China",
          },
          {
            "country": "Italia",
          },
          // ...
        ]
      },

      // ...
    ]
  }
}
```

#### Consigue un solo árbol
Puede obtener un solo árbol agregando el `id` como parametro: `(id: 5)`.

Query de ejemplo:

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

Respuesta:
```json
{
  "data": {
    "fruit": {
      "id": "5",
      "scientific_name": "Citrus x Tangerina",
      "tree_name": "Mandarino",
      "fruit_name": "Mandarina",
      "family": "Rutáceae"
    }
  }
}
```

#### Filtrado de árboles
También puede filtrar los árboles por `family` o por `origin`, por ejemplo: `(family: "Rosaceae")` o `(origin: "Asia")`.

Query de ejemplo:

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

Respuesta:
```json
{
  "data": {
    "filterFruitsFam": [
      {
        "id": "1",
        "tree_name": "Manzano",
        "fruit_name": "Manzana",
        "family": "Rosaceae"
      },
      {
        "id": "2",
        "tree_name": "Peral",
        "fruit_name": "Pera",
        "family": "Rosaceae"
      }
    ]
  }
}
```

### Type `Mutation`
En esta API se pueden hacer Mutaciones, aunque los datos no se guardarán de forma persistente.
Puedes agregar, actualizar y eliminar.

⚠ **_Todos los campos son obligatorios._**

#### Como agregar un árbol

```graphql
mutation addFruit {
 addFruit(
    id: 1
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
```

#### Como actualizar un árbol

```graphql
mutation updateFruit {
  updateFruit(
    id: 1
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
```

#### Como eliminar un árbol

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
  Hecho con ❤ por <a href="https://twitter.com/franqsanz">
    Franco Andrés Sánchez
  </a>
  <br />
  <br />
  <a href="https://www.netlify.com">
    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
  </a>
</p>