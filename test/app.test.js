var app = require('../app'),
  assert = require('assert'),
  http = require('http');


describe('GET /', function(){

  it('should return a 200 status code', function (done){
    http.get({ host: '0.0.0.0', port: 3000 }, function(res) {
      assert.deepEqual(res.statusCode, 200)
      done();
    }).on('error', function(e) {
      throw new Error(e);
    });
  });

});
