const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let catSchema = new Schema(
    {
        breed: {type: String},
        age: {type: Number},
        gender: {type: String},
        indoorCat: {type: Boolean}
    }
);

module.exports = mongoose.model("cat", catSchema);