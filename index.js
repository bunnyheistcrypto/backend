(async () => {
    const db = require('./database');
    const dbUser = require('./database_user');
    await db.sync();

    await dbUser.create({
        username: 'vinitbasilio',
        email: 'vinitbasilio@hotmail.com',
        password: '123'
    })

    const result = await dbUser.findAll();
    console.log(result);
})();