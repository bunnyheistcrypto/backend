const express = require('express');
const routes = express.Router();

const db = require('./database');
const dbUser = require('./database_user');
db.sync();

const bcrypt = require('bcrypt');

routes.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (error, hash) => {
        if(error) {
            return res.status(500).json({
                error: error
            });
        } 
        else {
            const novoUsuario = dbUser.create({
                username: req.body.username,
                email: req.body.email,
                password: hash
            });
            novoUsuario.then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Usuario criado'
                })
            })
            novoUsuario.catch(error => {
                console.log(error);
                res.status(500).json({
                    error: error
                });
            })
        }
    })
})

module.exports = routes;