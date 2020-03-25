/**
 *
 *  Tipos de Parametros:

 Query Prams: parametros nomeados enviados na rota após "?" (Utilizados normalmente em Filtros, Paginação)

 Route Params: Parametros utilizados para identificar RECURSOS, como por exemplo um unico usuário, passando seu id

 Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.

*/

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen('3333');
console.log('Listining 3333...');