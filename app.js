const express = require ('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const app = express();
const bodyPerser = require('body-parser');
//Parse incoming request bodies in a middleware before your handlers, 
//available under the req.body property.

mongoose.Promise = global.Promise;
//fixes depracation warning

mongoose.connect('mongodb://localhost/mongopractice');
//this connects my database using mongoose
app.use(bodyPerser.json());
routes(app);


module.exports = app;