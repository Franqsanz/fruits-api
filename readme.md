<h1 align="center">Fruits API</h1>
<p align="center">
  <a aria-label="Open in Visual Studio Code" href="https://open.vscode.dev/Franqsanz/fruits-api">
    <img alt="Open in Visual Studio Code" src="https://open.vscode.dev/badges/open-in-vscode.svg">
  </a>
  <a aria-label="Netlify Status" href="https://app.netlify.com/sites/fruits-api/deploys">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/dabb6e07-14c2-40af-bf96-2c1a00f43fc9/deploy-status">
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

API GraphQL con datos de árboles frutales.
Esta API esta construida con Apollo Server Lambda + Netlify Lambda.

> En este proyecto no estoy utilizando una base de datos.
> Los datos estan en [data.js](./src/data/data.js), por si deseas agregar más información. :)

## Contribuir
Lee el archivo [CONTRIBUTING.md](CONTRIBUTING.md) o verifica si existe algún [issues](https://github.com/Franqsanz/fruits-api/issues), todos los PRs son bienvenidos.

## URLs
**Playground:** [https://fruits-api.netlify.app/graphql](https://fruits-api.netlify.app/graphql)

**Web:** [https://fruit-api.netlify.app/](https://fruit-api.netlify.app/)

## Obtener el codigo de este proyecto

1. Clonar repositorio:
```sh
git clone https://github.com/Franqsanz/fruits-api.git
```
2. Entrar al directorio del repositorio:
```sh
cd fruits-api
```
3. Instalar todas las dependecias:
```sh
npm install

# O con yarn
yarn
```

4. Una vez que instale todas las dependencias ejecute el siguiente comando:
```sh
npm start

yarn start
```

5. Ejecutar Testing (opcional):
```sh
npm test

yarn test
```

Una vez ejecutada la API, si todo sale bien debe ver en su terminal el siguiente mensaje: `Lambda server is listening on 9000`, abra su navegador y coloque en la URL `http://localhost:9000/graphql` y esto cargará el **GraphQL Playground**, debería ver lo siguiente:

![playground](./playground.png)

Obviamente que el playground estará vacío usted deberá hacer las consultas.

## Intruducción
Esta documentación lo ayudará a familiarizarse con los recursos de Fruits API y le mostrará cómo hacer diferentes consultas.

### Esquema de la API
| Key                 | Type   | Description                               |
| ------------------- | ------ | ----------------------------------------- |
| id                  | ID     | ID del árbol                              |
| scientific_name     | String | Nombre científico del árbol               |
| tree_name           | String | Nombre del árbol                          |
| fruit_name          | String | Nombre de la fruta                        |
| family              | String | Tipo de familia del árbol                 |
| origin              | String | Origen del árbol                          |
| description         | String | Breve descripción de árbol                |
| bloom               | String | Fecha de floración del árbol              |
| maturation_fruit    | String | Fecha de maduración del fruto             |
| life_cycle          | String | Ciclo de vida del árbol                   |
| climatic_zone       | String | Zona climática del árbol                  |
| producing_countries | Array  | Países que producen los árboles frutales. |

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
<footer align="center">
  Hecho con ❤ por <a href="https://twitter.com/franqsanz">
    Franco Andrés Sánchez
  </a>
</footer>
