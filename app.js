const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');
const app = express();
let userController = require('./controllers/user');                         // Main Controller that handles API functionality

/*********************************** Setting up Express Server ***************************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

/************************************ API Routes *************************************************/
app.post('/api/login', (req, res) => {
    userController.loginUser(req, res);
});

app.post('/api/register', (req, res) => {
    userController.registerUser(req, res);
});

/************************************ Page Routes *************************************************/
// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/************************************ Initalizing Server *****************************************/
let server = app.listen(3000, function () {
    console.log('App server listening on port ' + server.address().port);
});

module.exports = app;