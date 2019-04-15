/**
 * Created by Saul Bompart on 17/02/2019.
 */
'use strict';
//const RECETAS = require('./recetas.model');
//const _ = require("lodash");


// Obtiene todos los objetos Persona de la base de datos
const all = (req, res) => {
    res.status(200).json([{id: 1, name: 'Receta 1'},{id: 2, name: 'Receta 2'} ]);
    /*RECETAS.find((err, receta) => {
        console.log('-------------', receta);
        if(err) res.status(500).json({msg: 'Error al buscar la receta'});
        res.status(200).json(receta);
    })*/
    //res.status(200).json({codigo: '000'});
    /* RECETAS.find(
        (err, person) => {
            if (err)
                res.send(err);
            var hero = [];
            _.forEach(person, (value) => {
                var obj = {
                    id: value._id,
                    name: value.name,
                    edad: value.edad
                };
                hero.push(obj);
            });
            res.json(hero); // devuelve todas las Personas en JSON
        }
    ); */
};

/* var get = function (req, res) {
    RECETAS.findById(req.params.idPerson, function (err, person) {
        if (err)
            res.send(err);
        else if (person == null)
            res.json("No existe la persona");
        else
            res.json(person);
    });
};

// Guarda un objeto Persona en base de datos
var create = function (req, res) {
    // Creo el objeto Persona
    RECETAS.create(
        { name: req.body.name, edad: req.body.edad },
        function (err, person) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las personas tras crear una de ellas
            RECETAS.find(function (err, person) {
                if (err)
                    res.send(err);
                all(req, res);
            });
        });

};

var update = function (req, res) {
    RECETAS.update({ _id: req.params.idPerson },
        { $set: { name: req.body.name, edad: req.body.edad } },
        function (err, person) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las personas tras crear una de ellas
            RECETAS.find(function (err, person) {
                if (err)
                    res.send(err);
                res.json(person);
            });
        });
};

var borrar = function (req, res) {
    RECETAS.remove({ _id: req.params.idPerson }, function (err, person) {
        if (err)
            res.send(err);
        else if (!person.result.n)
            res.json("No existe esta persona");
        else {
            RECETAS.find(function (err, person) {
                if (err)
                    res.send(err);
                all(req, res);
            });
        }
    });
}; */

module.exports = {
    all: all
}