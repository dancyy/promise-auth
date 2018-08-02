var mongoose = require('mongoose');
var moment = require('moment');
var passportLocalMongoose = require('passport-local-mongoose');
var uniqureValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true, required: true, default: ''},
    password: {type: String, required: true, default: ''},
    createdTimeStamp: {type: String, default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} 
});

var options = {
    usernameField: 'email',
}

// If I want to allow user to log in via email or username
// var options = {
//     usernameField: 'email',
//     usernameQueryFields: ['email', 'username']
// }

// Attach options to the user schema
userSchema.plugin(passportLocalMongoose, options);
userSchema.plugin(uniqureValidator);

module.exports = mongoose.model('user', userSchema);