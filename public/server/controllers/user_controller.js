var User = require('../models/user_model');

// Wrap all methods in an object
var user = {
	getAllUsers: function(req, res, next) {
		console.log('Getting all users from db...')
		User.find(function(err, data) {
			if (err) console.error(err);
			else res.json(data);
		});
	},

	addUser: function(req, res) {
		console.log('Adding user to db: ' + req.body.email);
		User.create(req.body, res);
	}
}

// Return the object
module.exports = user;