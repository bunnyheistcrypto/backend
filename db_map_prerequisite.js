const Sequelize = require('sequelize')
const db = require('./db')

const Map_Prerequisite = db.define('map_prerequisite', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    map_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    prerequesite_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prerequesite_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pre_requisite_value: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Map_Prerequisite