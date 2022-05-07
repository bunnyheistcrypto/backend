const Sequelize = require('sequelize')
const db = require('./db')

const User_State = db.define('user_state', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    health: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = User_State