const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const campgroundSchema = new Schema({
    title : String,
    price : String,
    location : String,
    descrition : String
});
module.exports = mongoose.model('Campground',campgroundSchema);