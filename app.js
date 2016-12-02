var express = require("express");
var app = express();
module.exports = app;

var config = require('./config.json')[app.get('env')];

var mysql = require('mysql');
var dbconn = mysql.createConnection(config.mysql);

function censor(censor) {
  var i = 0;

  return function(key, value) {
    if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
      return '[Circular]'; 

    if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      return '[Unknown]';

    ++i; // so we know we aren't using the original object anymore

    return value;  
  }
}

function str(o) {
    return JSON.stringify(o, censor(o));
}

app.get('/echo', function(req, resp) {
    dbconn.connect(function(err){});
    var query = dbconn.query('SELECT * FROM user');
    console.log(query.sql);
    
    resp_o = {
	headers:req.headers,
	protocol:req.protocol,
	query:req.query,
	baseUrl:req.baseUrl,
	originalUrl:req.originalUrl,
	method:req.method
    }
    resp.send(str(resp_o));
    //console.log(str(req));
})

var server = app.listen(config.localPort, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("example app listening at http://%s:%s", host, port)
});

