const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const launches = new Schema({
    flightNumber: Number,
    mission: String,
    rocket: String,
    launchDate: Date,
    target: String,
    customer: [String],
    upcoming: Boolean,
    success: Boolean,
})

module.exports = mongoose.model("Launches", launches)