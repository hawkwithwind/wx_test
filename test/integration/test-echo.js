require('../common');

var supertest = require('supertest'),    
    app = require('../../app');

exports.echo_should_return = function (done) {
    supertest(app)
	.get('/echo?hello')
	.expect(200)
	.end(done);    
};


