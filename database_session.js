const Sequelize = require('sequelize')
const db = require('./database')

const Session = db.define('session', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    session_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = Session