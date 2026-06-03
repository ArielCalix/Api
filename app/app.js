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
const actorRoutes = require('./routes/actorRoutes')

//TODO: Crear las rutas. App.use('/api/role', controller)
App.use('/api/actor', actorRoutes);
module.exports = App;