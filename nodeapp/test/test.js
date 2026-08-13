const request = require('supertest');
const app = require('../index.js');

describe('GET /', function() {
    it('respond with welcome message', function(done) {
        request(app).get('/').expect('{"response": "Hello, Welcome to Kalharcodes!!!"}', done);
    });
});