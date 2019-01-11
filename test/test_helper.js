const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost/muber_test');
    mongoose.connection
    .once('open', () => done())
    .on('error', err => {
        console.warn('warning', error);
    });
});

beforeEach(done => {
    const { drivers } = mongoose.connection.collections;
    drivers.drop()
    .then(() => drivers.ensureIndex({ 'geometry.coordinates': '2dsphere '}))
    //makes sure an index is in place over geo.coords prop over drivers collection and wil
    //recreate index so we can make geography queries
    .then(() => done())
    .catch(() => done());
});