'use strict'
const api = require('express').Router();
const { db } = require('../db');
const { Student, Campus } = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/students', (req, res, next) => {
    Student.findAll()
        .then(result => result.data)
        .then(result => res.status(200).send(result))
        .catch(console.error);
})

api.get('/campuses', (req, res, next) => {
    Campus.findAll()
        .then(result => result.data)
        .then(result => res.status(200).send(result))
        .catch(console.error);
})


module.exports = api