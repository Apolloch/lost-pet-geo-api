/**
 * Created by Apolloch on 09/11/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

var PetSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    photos : {
        type : [String],
        default: ''
    },
    breedId: {
        type : String ,
        required : true
    },
    speciesId:{
        type : String,
        required : true
    },
    color: {
        type : String ,
        default : ''
    },
    userId: {
        type : String,
        required : true
    }
});
PetSchema.plugin(mongoose.timestampPlugin);
module.exports = mongoose.model('Pets', PetSchema);
