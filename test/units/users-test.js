var app = require('../../server.js').app;
var loader = require('../../config/config-loader');
var mongoose = require('mongoose');
var User = mongoose.model('Users');
var _ = require('lodash');
var Promise = require('bluebird');

var sinon = require('sinon');
var should = require('should');
var chai = require('chai');
var assert = chai.assert,
  expect = chai.expect;


describe('Users tests', function() {

  describe('Model tests', function() {

    var user = new User();

    it('should encrypt password', function(done) {
      var hashed_password = user.encryptPassword('test');
      hashed_password.should.be.exactly('72d224d342638722965fa0df997f91ab2e9ed94d');
      done();
    });

    it('should return a empty result for empty password', function(done) {
      var hashed_password = user.encryptPassword('');
      hashed_password.should.be.exactly('');
      done();
    });

    it('should add a salt', function(done) {
      var random = sinon.mock(Math);
      random.expects('random').once();

      var salt = user.makeSalt();

      random.verify();
      random.restore();

      done();
    });

    it('should validate user', function(done) {
      this.skip();
      user.validate(user, function (){
        console.log("ohoho");
        done();
      });
    });

  });

  describe('Authentication tests', function() {

  });

});
