var expect = require('chai').expect;
var request = require('request');

describe('Main Page Content and Status', function(){
    it('Page', function(done){
        request('http://localhost:8080/', function(error, response, body){
            expect(body).to.equal('Hello World!');
            done();
        });
    });
    
    it('Status', function(done){
        request('http://localhost:8080/', function(error, response, body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

describe('About Page', function(){
    
it('Status', function(done){
    request('http://localhost:8080/About_page', function(error, response, body){
        expect(response.statusCode).to.equal(404);
        done();
    });
});
});