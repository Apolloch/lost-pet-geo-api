'use strict';

var di = require('di');
var _ = require('lodash');
var requireDir = require('require-dir');
var Bluebird = require('bluebird');
var request = require('request');
var fs = require('fs');
var cloudinary = require('cloudinary');

var load = function (config) {
  Bluebird.promisifyAll(request);

  cloudinary.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret
  });

  var baseModules = {
    config: ['value', config],
    express: ['value', require('express')],
    Bluebird: ['value', Bluebird],
    request: ['value', request],
    moment: ['value', require('moment')],
    _: ['value', require('lodash')],
    assert: ['value', require('assert')],
    fieldsValidator: ['value', require('fieldsValidator')],
    fs: ['value', fs],
    cloudinary: ['value', cloudinary]//,
    // requestDigest: ['value', require('request-digest')(config.resamania.username, config.resamania.password)],
    // queue: ['value', require('./kue')(config)]
  };

  var createInjector = function (modules) {
    return new di.Injector([baseModules, modules]);
  };

  return {
    openModels: function () {
      var models = requireDir('../app/models');
      _.forEach(models, function (model, name) {
        var modelName = getModelName(name);
        Bluebird.promisifyAll(model);
        Bluebird.promisifyAll(model.prototype);
        baseModules[modelName] = ['value', model];
      });
    },

    openControllers: function (router) {
      var controllers = requireDir('../app/controllers');
      baseModules.routes = ['value', router];

      _.forEach(controllers, function (controller, name) {
        var type = getType(controller);

        var injector = createInjector({
          router: ['factory', createRoute(router, name)],
          ctrl: [type, controller]
        });

        injector.get('ctrl');
      });
    },

    openApp: function (app) {
      baseModules.app = ['value', app];
    },

    openCommonLib: function () {
      var libs = requireDir('../app/common');
      _.forEach(libs, function (lib, name) {
        var type = getType(lib);
        baseModules[name] = [type, lib];
      });
    }
  };
};

function getType(module) {
  return typeof module === 'function' ? 'factory' : 'value';
}

function getModelName(name) {
  return _.capitalize(_.camelCase(name));
}

function createRoute(app, name) {
  return function (express) {
    var route = express.Router();
    app.use('/' + name, route);
    return route;
  };
}

module.exports = {
  load: load,
  createRoute: createRoute
};
