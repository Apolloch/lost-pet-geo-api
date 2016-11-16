/**
 * Created by Apolloch on 09/11/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird'); 

var PetSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        default: ''
    },
    photos : {
        type : [String],
        default: ''
    },
    type: {
        type : String,
        default: ''
    },
    breed: {
        type : String ,
        default : ''
    },
    color: {
        type : String ,
        default : ''
    },
    userId: {
        type : Number,
        required : true
    }
});
PetSchema.plugin(mongoose.timestampPlugin);
module.exports = mongoose.model('Pets', PetSchema);
