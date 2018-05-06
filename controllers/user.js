const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection To DB Successful");
});

let userModel = require('../db/userSchema').userModel;

module.exports.loginUser = (req, res) => {
    let result = {
        status: 0,
        message: "",
        user_data: {}
    };
    console.log(req.body);
    userModel.findOne({
        username: req.body.username,
        password: req.body.password
    }, function (err, user) {
        if(err) {
            result.message = err;
            return res.send(result)
        }
        if(user) {
            console.log(user);
            result.status = 1;
            result.message = "Login Successful";
            result.user_data = user;
        } else {
            result.message = "Invalid Username/Password"
        }
        res.send(result);
    });
}


module.exports.registerUser = (req, res) => {
    let result = {
        status: 0,
        message: "",
        user_data: {}
    };
    console.log(req.body);
    var newUser = new userModel({
        name: req.body.name,
        age: req.body.age,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    newUser.save(function (err, user) {
        if(err) {
            result.message = err;
            return res.send(result)
        }
        if(user) {
            console.log(user);
            result.status = 1;
            result.message = "Successfully Registered New User";
            result.user_data = user;
        } else {
            result.message = "Invalid Username/Password"
        }
        res.send(result);
    });
}
