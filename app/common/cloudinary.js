'use strict';

var cloudinary = require('cloudinary');
var Bluebird = require('bluebird');

module.exports = function (config) {
//  if (config)
    cloudinary.config(config);

  function upload(bytes, content_type, name, eager) {

    var image = new Buffer(bytes, 'binary').toString('base64');
    return new Bluebird(function (resolve) {
      cloudinary.uploader.upload('data:' + content_type + ';base64,' + image, function (result) {
        return resolve(result);
      }, { 
        public_id: name,
        eager : eager
      });  
    });

  }

  return {
    upload: upload
  };

};
