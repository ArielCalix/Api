'use strict'

const db = require('../config/db');
const actor = db.actor();

async function findAll(request, response) {
    actor.findAll()
        .then(data => {
            response.status(200).send(data);
        })
        .catch(error => {
            response.status(400).send(error);
        });
}

module.exports = {
    findAll
}