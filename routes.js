const express = require('express');
const routes = express.Router();

const db = require('./database');
const dbUser = require('./database_user');
db.sync();

const bcrypt = require('bcrypt');

routes.post('/signup', (req, res) => {
    const usernameExists = dbUser.findOne({ where: { username: req.body.username } });
    usernameExists.then(result => {
        if (result) {
            res.status(409).json({ error: 'Username already exists' });
        }
        else {
            const emailExists = dbUser.findOne({ where: { email: req.body.email } });
            emailExists.then(result => {
                if (result) {
                    res.status(409).json({ error: 'Email already exists' });
                }
                else {
                    bcrypt.hash(req.body.password, 10, (error, hash) => {
                        if(error) {
                            return res.status(409).json({ error: 'Password encrypt failed' });
                        } 
                        else {
                            const novoUsuario = dbUser.create({
                                username: req.body.username,
                                email: req.body.email,
                                password: hash
                            });
                            novoUsuario.then(result => {
                                res.status(200).send(result);
                            })
                            novoUsuario.catch(error => {
                                res.status(201).json({ error: 'Signup failed, try again' });
                            })
                        }
                    })
                }
            })
        }
    })
})

module.exports = routes;