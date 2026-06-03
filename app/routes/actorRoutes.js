'use strict'

const express = require('express');
const actorController = require('../controllers/actorController');

const apiRoutes = express.Router();

apiRoutes
    .get('/getActors', async (req, res) => await actorController.findAll(req, res))
    .post('/insertActor', async (req, res) => actorController.insertActor(req, res));

module.exports = apiRoutes;