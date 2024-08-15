const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// create model
const User = mongoose.model("User", userSchema);

module.exports = User;