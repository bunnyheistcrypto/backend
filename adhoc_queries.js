(async () => {
    
    await sequelize.sync() //Usar apenas enquanto estivermos desenvolvendo
    
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