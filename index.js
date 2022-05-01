(async () => {
    const db = require('./database');
    const dbEstructures = require('./database_estructures');
    await db.sync();
})();

/*
db.authenticate().then(() => {
    console.log('Sucesso na conexão com o DB');
}).catch((error) => {
    console.error('Falha na conexão:', error);
});

const result = User.findAll();
console.log(JSON.stringify(result, null, 2));

try {
    const vini = User.create({ id:2, username:'vinietbasilio' });
} catch(error) {
    console.log(error);
}
*/