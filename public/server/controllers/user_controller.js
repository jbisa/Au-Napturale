var User = require('../models/user_model');

// Wrap all methods in an object
var user = {
	read: function(req, res, next) {
		res.json({
			type: "Read",
			id: req.params.id
		});
	},

	create: function(req, res, next) {
		res.send(req.body);
	},

	update: function(req, res, next) {
		res.json({
			type: "Update",
			id: req.params.id,
			body: req.body
		});
	},

	delete: function(req, res, next) {
		res.json({
			type: "Delete",
			id: req.params.id
		});
	},

	getAll: function(req, res, next) {
		User.find(function(err, data) {
			if (err) console.error;
			console.log('GET request: ' + data);
			res.json(data);
		});
	}
}

// Return the object
module.exports = user;