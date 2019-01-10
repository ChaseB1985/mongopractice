const Driver = require('../models/driver');
//driver model

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there'});
    },

    create(req, res) {
        const driverProps = req.body; 

        Driver.create(driverProps)
        //takes driver model, creates new driver, (pass in props we want to save )
        .then(driver => res.send(driver));
    }
};