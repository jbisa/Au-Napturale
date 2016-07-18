var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema for the user
var userSchema = Schema({
	email: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

// User model, pointing to 'user' table in db
var User = mongoose.model("User", userSchema, 'user');

module.exports = User;