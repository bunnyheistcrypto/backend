(async () => {
    const db = require('./database');
    const dbUser = require('./database_user');
    await db.sync();
    
    //Escrita
    await dbUser.create({
        username: 'vinitbasilio',
        email: 'vinitbasilio@hotmail.com',
        password: '123'
    })
    
    //Leitura
    const result = await dbUser.findAll();
    console.log(result);
})();