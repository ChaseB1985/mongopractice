const express = require ('express');
const routes = require('./routes/routes');
const app = express();
const bodyPerser = require('body-parser');
//Parse incoming request bodies in a middleware before your handlers, 
//available under the req.body property.

app.use(bodyPerser.json());
routes(app);


module.exports = app;