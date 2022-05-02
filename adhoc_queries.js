(async () => {
    const db = require('./database')
    const dbUser = require('./database_user')
    const dbWallet = require('./database_wallet')
    await db.sync()
    
    /*
    //Escrita
    await dbUser.create({
        username: 'vinitbasilio',
        email: 'vinitbasilio@hotmail.com',
        password: '123'
    })
    
    //Leitura
    const result = await dbUser.findAll()
    console.log(result)
    
    //Delete
    await dbUser.destroy({ where: { id: 11 } })
    */
})()