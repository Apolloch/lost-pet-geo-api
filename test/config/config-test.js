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

describe('Config tests', function() {

  describe('development', function() {

    var config = loader.load({env : 'development'});

    it('should have properties server,name and apikey', function(done) {
      config.should.have.property('server');
      config.should.have.property('apiKey');
      config.should.have.property('name');
      done();
    });

    it('should have server properties with right url', function(done) {
      config.server.should.have.property('url', 'http://api-dev.com:5555');
      done();
    });

  });

  describe('production', function() {

    var config = loader.load({env : 'production'});

    it('should have properties server,name and apikey', function(done) {
      config.should.have.property('server');
      config.should.have.property('apiKey');
      config.should.have.property('name');
      done();
    });

    it('should have server properties with right url', function(done) {
      config.server.should.have.property('url', 'http://lostpet-api.mybluemix.net');
      done();
    });
  });

});
