const express = require('express');
//express speaks to node for easy routing
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
//Parse incoming request bodies in a middleware before your handlers, 
//available under the req.body property.

mongoose.Promise = global.Promise;
//fixes depracation warning
if (process.env.NODE_ENV !== 'test') {
    //for testing purposes, otherwise DBs will not drop
    mongoose.connect('mongodb://localhost/mongopractice');
    //this connects my database using mongoose
}


app.use(bodyParser.json());
routes(app);
//call that sets up all routes in the application

app.use((err, req, res, next) => {
    //we can use app.use to register middleware
    //next is a function which will force going to the next 
    //middleware in the chain
    res.send({ error: err.message });
});


module.exports = app;