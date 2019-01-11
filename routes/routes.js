const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
// watch for incoming requests for method GET
//to the route http://localhost:3050/api
app.get('/api', DriversController.greeting);

app.post('/api/drivers', DriversController.create);
app.put('/api/drivers/:id', DriversController.edit);
//match ANY route that is a put req with any string after /
//express will auto fix
app.delete('/api/drivers/:id', DriversController.delete);
app.get('/api/drivers', DriversController.index);
};