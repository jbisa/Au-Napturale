var mongoose = require('mongoose');

var schema = {
	email: String
}

var User = mongoose.model("User", schema);

module.exports = User;