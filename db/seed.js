const Sequelize = require('sequelize');
const db = require('./index');
const { Student, Campus } = require('./models');

db.sync({ force: true })
    .then(() => {
        Campus.bulkCreate([
            { name: 'Terra', image: 'https://c2.staticflickr.com/4/3712/14294653894_62fc3498b7_b.jpg' },
            { name: 'Luna', image: 'https://cdn.pixabay.com/photo/2017/02/23/17/56/moon-2092807_1280.jpg' },
            { name: 'Mars', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Aqueduct_below_Rochester_Historical_Society_in_Rochester%2C_NY.JPG/1024px-Aqueduct_below_Rochester_Historical_Society_in_Rochester%2C_NY.JPG' },
            { name: 'Titan', image: 'http://i.telegraph.co.uk/multimedia/archive/01107/aquarium_1107958i.jpg' }
        ]);
    })
    .then(() => {
        Student.bulkCreate([
            { name: 'Harry Potter', email: 'stagparty@hotmail.com', CampusId: 1 },
            { name: 'Hermione Granger', email: 'hgranger@gmail.com', CampusId: 1 },
            { name: 'Ronald Weasley', email: 'bludgerface@yahoo.com', CampusId: 1 },
            { name: 'Floofy Cat', email: 'jeneale6@hotmail.com', CampusId: 2 },
            { name: 'Squackie Dog', email: 'squackie@hotmail.com', CampusId: 2 },
            { name: 'Dudley Cockatiel', email: 'potatochips@hotmail.com', CampusId: 2 },
            { name: 'Sarek', email: 'logicROOLS@hotmail.com', CampusId: 3 },
            { name: 'Amanda Greyson', email: 'agreyson@gmail.com', CampusId: 3 },
            { name: 'Friend Friendoson', email: 'angst@yahoo.com', CampusId: 3 },
            { name: 'Ebony Dark\'ness Dementia Raven Way', email: 'goffik@hotmail.com', CampusId: 3 },
            { name: 'Gabe', email: 'gabe@fullstack.edu', CampusId: 4 },
            { name: 'Ashi', email: 'ashi@fullstack.edu', CampusId: 4 },
            { name: 'Khan Noonien Singh', email: 'khan@fullstack.edu', CampusId: 4 },
            { name: 'Bender Shinybottom', email: 'bender@fullstack.edu', CampusId: 4 },
            { name: 'Q', email: 'qcontinuum@fullstack.edu', CampusId: 4 },
        ]);            
    })
    .then(() => {
        db.close();
        return null;
    });