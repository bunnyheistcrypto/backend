const Sequelize = require('sequelize')
const db = require('./db')

const Transaction = db.define('transaction', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    from_wallet: {
        type: Sequelize.STRING,
        allowNull: false
    },
    to_wallet: {
        type: Sequelize.STRING,
        allowNull: false
    },
    item_id: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Transaction