const Sequelize = require('sequelize')
const db = require('./db')

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
    },
    session_expires_at: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Session