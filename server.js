const express = require('express')
const session = require('express-session')

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

const routes = express.Router()
const app = express()

const maxSessionAge = 24*60*60*1000

db.sync()

//dbSession.destroy({ where: { [Op.lte]: [{ session_expires_at: Date.now() }] } })

app.use(express.json())

app.use(session({
    secret: 'login secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: maxSessionAge }
}))

app.use(routes)

const bcrypt = require('bcrypt')

routes.post('/signup', (req, res) => {
    const usernameExists = dbUser.findOne({ where: { username: req.body.username } })
    usernameExists.then(result => {
        if (result) {
            res.status(409).json({ error: 'Username already exists' })
        }
        else {
            const emailExists = dbUser.findOne({ where: { email: req.body.email } })
            emailExists.then(responde => {
                if (responde) {
                    res.status(409).json({ error: 'Email already exists' })
                }
                else {
                    bcrypt.hash(req.body.password, 10, (error, hash) => {
                        if(error) {
                            return res.status(409).json({ error: 'Password encrypt failed' })
                        } 
                        else {
                            const novoUsuario = dbUser.create({
                                username: req.body.username,
                                email: req.body.email,
                                password: hash,
                                wallet: req.body.wallet
                            });
                            novoUsuario.then(output => {
                                res.status(200).send(output)
                            })
                            novoUsuario.catch(error => {
                                res.status(201).json({ error: 'Signup failed, try again' })
                            })
                        }
                    })
                }
            })
        }
    })
})

routes.post('/login', (req, res) => {
    const usernameExists = dbUser.findOne({ where: { username: req.body.username } })
    usernameExists.then(result => {
        if (!result) {
            res.status(409).json({ error: 'This username does not exist' })
        }
        else {
            bcrypt.compare(req.body.password, result.password, (error, response) => {
                if (response) {
                    const novaSessao = dbSession.create({
                        user_id: result.id,
                        session_id: req.sessionID,
                        session_expires_at: Date.now() + maxSessionAge
                    })
                    novaSessao.then(output => {
                        res.status(200).send(output)
                    })
                    novaSessao.catch(error => {
                        res.status(201).json({ error: 'Login failed, try again' })
                    })
                }
                else {
                    res.status(201).json({ error: 'Incorrect passworddddddd' })
                }
            })
        }
    })
})

app.listen(8888)