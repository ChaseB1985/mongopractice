const express = require ('express');

const app = express();

// watch for imcoing requests for method GET
//to the route http://localhost:3050/api
app.get('/api', (req, res) =>{
    res.send({ hi:'there' });
});


module.exports = app;