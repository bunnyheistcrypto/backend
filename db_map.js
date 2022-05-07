const Sequelize = require('sequelize')
const db = require('./db')

const Map = db.define('map', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Map