(async () => {
    const { Op } = require("sequelize")

    const dbSession = require('./db_session')
    const db = require('./db')
    const dbUser = require('./db_user')
    const dbTransaction = require('./db_transaction')
    const dbUserItem = require('./db_user_item')
    const dbUserState = require('./db_user_state')
    const dbMap = require('./db_map')
    const dbMapPrerequisite = require('./db_map_prerequisite')
    const dbItem = require('./db_item')
    
    //sequelize.sync() //Usar apenas enquanto estivermos desenvolvendo
    
    //dbSession.destroy({ where: { [Op.gte]: [{ session_expires_at: Date.now() }] } })

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