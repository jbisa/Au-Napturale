// Init express framework
var express = require('express'),
	path = require('path'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	databaseName = 'aunap_db';

// Express setup
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/public')));

// Routes set up
var router = express.Router();

mongoose.connect('mongodb://localhost/' + databaseName);

// Connect to mongo db and start server only after sucessfully connecting
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', startServer);

// Start up server
function startServer() {
	var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log('Server running on port ' + port);
});
}
