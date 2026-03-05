'use strict'

const db = require("./app/config/db");
const App = require('./app/app');

const PORT = process.env.PORT || 3000;

db.sequelizeInstance.sync()
    .then(() => {
        console.log("synced");
        App.listen(parseInt(PORT), function (error) {
            if (error) return console.error(error)
            console.info(`App corriendo en puerto ${PORT}`);
        })
    })
    .catch(error => {
        console.error("Fallo al sincronizarse", error);
    }); 