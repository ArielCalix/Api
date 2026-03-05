'use strict'

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelizeInstance = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.MY_SQL_PORT,
    dialectOptions: {
        connectTimeout: 100000,
    },
    operatorAliases: "false",
    pool: {
        max: parseInt(process.env.POOL_MAX),
        min: parseInt(process.env.POOL_MIN),
        acquire: parseInt(process.env.POOL_ACQUIRE),
        idle: parseInt(process.env.POOL_IDLE)
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelizeInstance = sequelizeInstance;

// creacion de modelo en BD
db.actor = require('../models/actorModel')(sequelizeInstance, Sequelize);

module.exports = db;