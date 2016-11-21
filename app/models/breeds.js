/**
 * Created by Apolloch on 16/11/2016.
 */
/**
 * Created by Apolloch on 16/11/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BreedSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    speciesId:{
        type : String,
        required : true
    }
});
BreedSchema.plugin(mongoose.timestampPlugin);
module.exports = mongoose.model('Breeds', BreedSchema);
