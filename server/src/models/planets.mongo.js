const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planets = new Schema({
    name: String,
})

module.exports = mongoose.model("Planets", planets)