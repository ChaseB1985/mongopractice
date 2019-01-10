const Driver = require('../models/driver');
//driver model

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there'});
    },

    create(req, res, next) {
        const driverProps = req.body; 

        Driver.create(driverProps)
        //takes driver model, creates new driver, (pass in props we want to save )
        .then(driver => res.send(driver))
        .catch(next);
        //if something goes wrong with the promise then it will catch
    },

    edit(req, res, next) {
        const driverId = req.params.id;
        const driverProps = req.body;

        Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
        .then(() => Driver.findById({ _id: driverId }))
        .then(driver => res.send(driver))
        .catch(next);
    }
};