'use strict'

const db = require('../config/db');
const actor = db.actor;

async function findAll(request, response) {
    actor.findAll()
        .then(data => {
            response.status(200).send(data);
        })
        .catch(error => {
            response.status(400).send(error);
        });
}

async function insertActor(request, response) {
    const actorInsert = request.body;
    actor.create({
        actor_id: actorInsert.id,
        first_name: actorInsert.name,
        last_name: actorInsert.last,
    })
        .then(data => {
            response.status(200).send(data);
        })
        .catch(error => {
            response.status(400).send(error);
        });
}

async function updateActor(request, response) {
    const actorUpdate = request.body;

    actor.update(actorUpdate, {
        where: { actor_id: actorUpdate.id }
    })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Actor actualizado correctamente."
                });
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar ni actualizar el actor con ID=${actorUpdate.id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Sucedió un error al actualizar el alumno."
            });
        });
}

module.exports = {
    findAll,
    insertActor,
    updateActor
}