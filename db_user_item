const Sequelize = require('sequelize')
const db = require('./db')

const User_Item = db.define('user_item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    item_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    wallet_id: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User_Item