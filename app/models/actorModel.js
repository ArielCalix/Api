'use strict'

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const attributes = {
        actor_id: {
            type: DataTypes.SMALLINT,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING(45),
        },
        last_name: {
            type: DataTypes.STRING(45),
        }
    };
    const options = {
        defaultScope: {
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        },
        scopes: {},
        tableName: 'actor',
        timestamps: 'false',
    };
    return sequelize.define('', attributes, options);
}