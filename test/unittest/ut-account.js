var str = require('../common');

var db = require('../../models');

var Promise = require('bluebird');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe("account", function(){
  var admin = db.Account.build({'name':'admin'}),
      bolome = db.Account.build({'name':'bolome'}),
      ac001 = db.Account.build({'name':'ac001'});
  beforeEach(function(done){
    Promise.all([admin.save(), bolome.save(), ac001.save()]);
    done();
  });

  afterEach(function(done){
    Promise.all([admin.destroy({force: true}), bolome.destroy({force: true}), ac001.destroy({force: true})]);
    done();
  });

  describe("#find(name)", function() {
    it("should be able to be find by name", function(done) {
      db.Account.findOne({where:{'name':'admin'}})
	.then(function(user) {
	  //console.log(str(user));
	  expect(user.id).to.be.ok;
	  expect(user.name).to.be.equal("admin");
	  done();
	});
    });
  });
  
});

