const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isEmail: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User