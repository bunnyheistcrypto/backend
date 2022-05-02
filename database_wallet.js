const Sequelize = require('sequelize')
const db = require('./database')

const Wallet = db.define('wallet', {
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
    },
    wallet: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    wallet_password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Wallet