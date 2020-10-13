[![Netlify Status](https://api.netlify.com/api/v1/badges/dabb6e07-14c2-40af-bf96-2c1a00f43fc9/deploy-status)](https://app.netlify.com/sites/reverent-swirles-236b84/deploys)

# Fruits API

API GraphQL con datos de árboles frutales.

Esta API esta construida con Apollo Server Lambda + Netlify Lambda.

### Obtener el codigo de este proyecto

1. Clonar repo:
```sh
$ git clone https://github.com/Franqsanz/fruits-api
```
2. Entrar al directorio del repo:
```sh
$ cd fruits-api
```
3. Instalar todas las dependecias:
```sh
$ npm install

# O con yarn
$ yarn
```
4. Una vez que instale todas las dependencias ejecute el siguiente comando:
```sh
$ npm start

$ yarn start
```

Una vez ejecutada la API, si todo sale bien debe ver en su terminal el siguiente mensaje: `Lambda server is listening on 9000`, abra su navegador y coloque en la URL `http://localhost:9000/graphql` y esto cargara el **GraphQL Playground**, deberia ver lo siguiente:

![playground](./playground.png)

Obviamente que el playground estara vacio usted debera hacer las `querys`.

### Intruducción
Este breve intruducción lo ayudara a saber como consumir esta API.

Como obtener todos los árboles:

query de ejemplo

```graphql
query allFruits {
  Fruits {
    id
    scientific_name
    fruit_name
    origin
    description
    climatic_zone
  }
}
```

Obtener un solo resultado

query de ejemplo

```graphql
query oneFruit {
  Fruit(id: 5) {
    id
    scientific_name
    tree_name
    fruit_name
    family
  }
}
```

Filtrado por `Familia`

query de ejemplo
```graphql
query filterFruit{
  FilterFruit(family: "Rosáceas") {
    id
    name_fruit
    family
  }
}
```