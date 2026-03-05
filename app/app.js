'use strict'

const express = require('express');
const cors = require('cors');
const App = express();

App.use(
    cors({ origin: "*" })
);

App.use(express.json());
App.use(express.urlencoded({ extended: false }));

//TODO: llamar a los contraladores desde aca. const controller = require('./routes/controller')

//TODO: Crear las rutas. App.use('/api/role', controller)

module.exports = App;