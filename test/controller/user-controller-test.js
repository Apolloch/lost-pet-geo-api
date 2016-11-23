var app = require('../../server.js').app;
var controller = require('../../app/controllers/users.js');

var mongoose = require('mongoose');
var User = mongoose.model('Users');
var _ = require('lodash');
var Promise = require('bluebird');

var sinon = require('sinon');
var should = require('should');
var chai = require('chai');
var assert = chai.assert,
  expect = chai.expect;


describe('Users controller tests', function() {

  var userMock = sinon.mock(User);
  var routeur = { get: function (param, params) {}, put: function (param, params) {} };
  var userController = controller(routeur, userMock);

  //TODO: add tests to controller with req and res

});
