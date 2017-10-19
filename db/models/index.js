'use strict';
const { STRING } = require('sequelize');
const db = require('../index');
// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations

//STUDENT MODEL
const Student = db.define('Student', {
    name: {
        type: STRING,
        notNull: true
    },
    email: {
        type: STRING,
        isEmail: true
    },
    status: {
        type: STRING,
        defaultValue: "In Good Standing"
    }
})

//CAMPUS MODEL
const Campus = db.define('Campus', {
    name: {
        type: STRING,
        notNull: true
    },
    image: {
        type: STRING
    },
    status: {
        type: STRING,
        defaultValue: "Secured"
    }
})

//ASSOCIATIONS
Student.belongsTo(Campus);
Campus.hasMany(Student);

//EXPORTS
module.exports = {
    Student,
    Campus
}