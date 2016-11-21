/**
 * Created by Apolloch on 16/11/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpeciesSchema = new Schema({
    name: {
        type: String,
        default: ''
    }
});
SpeciesSchema.plugin(mongoose.timestampPlugin);
module.exports = mongoose.model('Species', SpeciesSchema);
