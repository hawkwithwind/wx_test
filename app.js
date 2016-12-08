var express = require("express");
var app = express();
module.exports = app;

var config = require('./config/config.json')[app.get('env')];

//var mysql = require('mysql');
//var dbconn = mysql.createConnection(config.mysql);

var Sequelize = require('sequelize')
, sequelize = new Sequelize('wx', 'root', 'bywindifly', {
  dialect: 'mysql',
  port: 3306
});

Account = require('./models/account')(sequelize, Sequelize);
User = require('./models/user')(sequelize, Sequelize);

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
  
  sequelize.authenticate()
    .then(function(err) {
      console.log("connected to db");
    })
    .then(function(err) {
      var account001 = Account.create({name:"account001"});
      return account001;
    })
    .then(function(account001){
      console.log(str(account001));
      var user001 = User.create({name:"testUser001", "accountId": account001.id});
      return user001;
    })
    .then(function(user001){
      console.log("user: ", str(user001));
    })
    .catch(function(err){
      console.log("db err:", err)
    });
});

