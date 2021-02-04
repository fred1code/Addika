const express = require("express");
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const config = require("../config.js");
const user = require("./components/user/network");
const app = express();

app.use(bodyParser.json());
const swaggerDoc= require('./swagger.json');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



//rutas
app.use("/api/todos", user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto ", config.api.port);
});
