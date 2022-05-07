const Sequelize = require('sequelize')
const db = require('./db')

const Item = db.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    user_id_owned: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Item