const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./database');

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: console.log
});
module.exports = db;

db.authenticate().then(() => {
    console.log('Sucesso na conexão com o DB');
}).catch((error) => {
    console.error('Falha na conexão:', error);
});

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
db.sync;

const result = User.findAll();
//console.log(JSON.stringify(result, null, 2));

/*try {
    const vini = User.create({ id:2, username:'vinietbasilio' });
} catch(error) {
    console.log(error);
}*/

