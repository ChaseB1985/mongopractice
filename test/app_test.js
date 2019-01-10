const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('the express app',() => {
    it('handles GET req to /api', (done) => {
        request(app)
        .get('/api')
        .end((err, response) => {
            assert(response.body.hi === 'there');
            done();
        });
    });
});
