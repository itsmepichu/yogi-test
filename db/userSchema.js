const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: String,
    age: Number,
    username: String,
    password: String,
    email: String
});

module.exports.userModel = mongoose.model('users', userSchema);