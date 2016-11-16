var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
 
chai.use(chaiAsPromised);
 
// Then either: 
var expect = chai.expect;

var config = require('../config/test.js')
var cloudinary = require('../../app/common/cloudinary.js')(config.cloudinary);
var fs = require('fs');
var testImg = fs.readFileSync(__dirname + '/../datas/face-test.jpg');
console.log(config.cloudinary)

describe('Cloudinary tests : ', function () {

  /**********************************************/
  /*               INITIALISATION               */
  /**********************************************/


  it('/send image', function (done) {
    expect(cloudinary.upload(testImg, 'jpg', 'face-test', [
      {effect: "pixelate_faces"}])).
            to.eventually.have.property('url').notify(done);
  });



  /**********************************************/
  /*               Final 					              */
  /**********************************************/


});
