'use strict'
const api = require('express').Router();
const { db } = require('../db');
const { Student, Campus } = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/students', (req, res, next) => {
    Student.findAll({ include: [{ all: true }] })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.get('/students/:id', (req, res, next) => {
    Student.findOne({
        where: { id: req.params.id },
        include: [{ all: true }]
    })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.post('/students', (req, res, next) => {
    Student.create({
        name: req.body.name,
        email: req.body.email
    }).then(result => res.status(201).send(result))
        .catch(console.error);
})

api.put('/students/:id', (req, res, next) => {
    Student.update({
        name: req.body.name,
        email: req.body.email,
        status: req.body.status,
        campusId: req.body.campusId
    },
        { where: { id: req.params.id } })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.delete('/students/:id', (req, res, next) => {
    Student.destroy({
        where: { id: req.params.id }        
    })
        .then(() => res.status(200).send(req.params.id))
        .catch(console.error);
})

api.get('/campuses', (req, res, next) => {
    Campus.findAll({ include: [{ all: true }] })        
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.get('/campuses/:id', (req, res, next) => {
    Campus.findOne({
        where: { id: req.params.id },
        include: [{ all: true }]
    })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.post('/campuses', (req, res, next) => {
    Campus.create({
        name: req.body.name,
        image: req.body.image
    }).then(result => res.status(201).send(result))
        .catch(console.error);
})

api.put('/campuses/:id', (req, res, next) => {
    Campus.update({
        name: req.body.name,
        image: req.body.image,
        status: req.body.status        
    },
        { where: { id: req.params.id } })
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.delete('/campuses/:id', (req, res, next) => {
    Campus.destroy({
        where: { id: req.params.id }
    })
        .then(result => res.status(200).send(req.params.id))
        .catch(console.error);
})

module.exports = api