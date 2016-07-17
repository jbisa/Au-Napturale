var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	email: String
});

var User = mongoose.model("User", userSchema, 'user');

module.exports = User;