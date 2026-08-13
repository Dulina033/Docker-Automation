var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
    it('respond with welcome message', function(done) {
        request(app).get('/').expect('{ "response": "Hello, Welcome to Kalharcodes!!!"}', done);
    });
});