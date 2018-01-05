var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require("compression");

var seed = require('./routes/seed');
var users = require('./routes/users'); 
var shows = require('./routes/shows');


var app = express();
app.use(compression());

//load env variables
require('dotenv').load()

//connect to Mongodb with mongoose
require('./config/database')


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/seed', seed)
app.use('/api/users', users)
app.use('/api/shows', shows)

module.exports = app;

// download Robo Mongo
// create database folder with database.js file.
    // establish mongoose and load it in server.js
// create user.js in our models folder.

// walk through .find()
// walk through .findOne()
// walk through .findById()
// walk through .findByIdAndRemove()
// walk through .findByIdAndUpdate()
// walk through .save()
// walk through .limit()
// walk through .where().equals()
