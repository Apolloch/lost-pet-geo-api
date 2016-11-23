var app = require('../../server.js').app;
var loader = require('../../config/config-loader');
var mongoose = require('mongoose');
var Pet = mongoose.model('Pets');
var _ = require('lodash');
var Promise = require('bluebird');

var sinon = require('sinon');
var should = require('should');
var chai = require('chai');
var assert = chai.assert,
  expect = chai.expect;


describe('Pets tests', function() {

  describe('Model tests', function() {

    var pet = new Pet();



  });


});
