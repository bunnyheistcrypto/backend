const Sequelize = require('sequelize');
const dbParameters = require('./database_parameters');

const db = new Sequelize(dbParameters.database, dbParameters.username, dbParameters.password, {
    host: dbParameters.host,
    dialect: dbParameters.dialect
});

module.exports = db;