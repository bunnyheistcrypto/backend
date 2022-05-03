const express = require('express')
const session = require('express-session')
const dbSession = require('./database_session')
const db = require('./database')
const dbUser = require('./database_user')

const routes = express.Router()
const app = express()

db.sync()

app.use(express.json())

app.use(session({
    secret: 'login secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }
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
                                password: hash
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
                        session_id: req.sessionID
                    })
                    novaSessao.then(output => {
                        res.status(200).send(output)
                    })
                    novaSessao.catch(error => {
                        res.status(201).json({ error: 'Login failed, try again' })
                    })
                }
                else {
                    res.status(201).json({ error: 'Incorrect password' })
                }
            })
        }
    })
})

app.listen(8888)