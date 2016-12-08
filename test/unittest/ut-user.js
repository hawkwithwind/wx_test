var str = require('../common');
var db = require('../../models');
var Promise = require('bluebird');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe("user", function(){
  var admin = db.Account.build({name:'admin'}),
      bolome = db.Account.build({name:'bolome'}),
      ac001 = db.Account.build({name:'ac001'});
  var peter = db.User.build({name:'peter'}),
      hawk = db.User.build({name:'hawk'});
  before(function(done){
    Promise.all([admin.save(), bolome.save(), ac001.save()])
      .then(function(values) {
	//return peter.setAccount(bolome);
	return Promise.all([peter.setAccount(bolome), hawk.setAccount(bolome)]);
      })
      .then(function(values){
	return Promise.all([peter.save(), hawk.save()]);
      })
      .then(function(values) {
	done();
      });    
  });

  after(function(done){
    Promise.all([admin.destroy({force: true}), bolome.destroy({force: true}), ac001.destroy({force: true})])
      .then(function(values){
    	return Promise.all([peter.destroy({force: true}), hawk.destroy({force: true})]);
      })
      .then(function(values) {
    	done();
      });    
  });

  describe("#find(name)", function() {
    it("should be able to be find by name", function(done) {
      db.User.findOne({where:{'name':'peter'}})
	.then(function(user) {
	  console.log(str(user));
	  expect(user.id).to.be.ok;
	  expect(user.name).to.be.equal('peter');
	  return user.getAccount();	    
	})
	.then(function(account){
	  expect(account.name).to.be.equal('bolome');
	  done();
	});
    });
  });

  describe("#find(account)", function() {
    it("should be able to be find by account", function(done) {
      db.Account.findOne({where:{'name':'bolome'}})
	.then(function(account){
	  return account.getUsers();
	})
	.then(function(users) {
	  //console.log(str(user));
	  expect(users).to.have.length(2);
	  done();
	});
    });
  });
  
});
