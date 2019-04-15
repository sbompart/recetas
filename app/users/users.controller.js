/**
 * Created by Saul Bompart on 17/02/2019.
 */
'use strict';
//const USERS = require('./users.model');
const { logSuccess, logError } = require('../../utils/logger');
//const _ = require("lodash");


// Obtiene todos los objetos Users de la base de datos
const all = (req, res) => {
    /*USERS.find((err, users) => {
        if(err) {
            logError('Usuarios con errores');
            return res.status(500).json({msg: 'Error de usuarios'});
        }
        logSuccess('Usuarios exitoso');
        res.status(200).json(users);
    });*/
    res.status(200).json([{id: 1, name: 'User 1'},{id: 2, name: 'User 2'}]);
};

const get = function (req, res) {
    /*USERS.findOne({name: req.params.idUser}, function (err, user) {
        if(err || !user){ 
            logError(err);
            return res.status(409).json({msg: 'sin datos'});
        }   
        logSuccess('User exitoso: '+ req.params.idUser+user);
        res.status(200).json(user);
    });*/
    res.status(200).json([{id: 2, name: 'User 2'}]);
};

module.exports = {
    all,
    get
}