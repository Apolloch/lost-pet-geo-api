var app = require('../../server.js').app;
var mongoose = require('mongoose');
var User = mongoose.model('Users');
var UserSchema = require('mongoose').model('Users').schema;
var _ = require('lodash');
var Promise = require('bluebird');

var sinon = require('sinon');
var should = require('should');
var chai = require('chai');
var assert = chai.assert,
  expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var httpMocks = require('node-mocks-http');


describe('Users tests', function() {

  describe('Model tests', function() {

    var user = null;

    beforeEach((done) => {
      user = new User();
      done();
    });

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

    it('should set a password to a user', function(done) {
      user.set('password', 'TestPassword');
      user.password.should.be.exactly('TestPassword');
      user.salt.should.be.a.String();
      user.hashed_password.should.be.a.String();
      done();
    });


    it('should save a user', function(done) {
      user.set('password', 'TestPassword');
      user.password.should.be.exactly('TestPassword');
      user.salt.should.be.a.String();
      user.hashed_password.should.be.a.String();
      user.save();

      done();
    });

    it('should save because the user is not new', function(done) {
      user.isNew = false;
      user.save();
      done();
    });

    /*it('should not save because the user dont have password', function(done) {
      user.save().should.be.rejected;
      done();
    });*/


  }); // End : Describe model test

  describe('Authentication tests', function() {

  });

});
