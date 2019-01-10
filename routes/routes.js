const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {

    // watch for imcoing requests for method GET
//to the route http://localhost:3050/api
app.get('/api', (req, res) =>{
    res.send({ hi:'there' });
});
};