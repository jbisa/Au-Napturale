// modules =================================================
var express 	= require('express'),
	path 		= require('path'),
	mongoose 	= require('mongoose'),
	bodyParser 	= require('body-parser');

// configuration ===========================================
// Express setup
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/public')));

// Routes set up
var router 	= express.Router();
var user 	= require('./public/server/controllers/user_controller');

// Get all users
router.get('/users', user.getAll);

// Create a user
router.post('/user', user.create);

// Get one user, update one user, delete one user
router.route('/user/:id')
	.get(user.read)
	.put(user.update)
	.delete(user.delete)

// Register the routing
app.use('/', router);

// Connect to mongo db and start server only after sucessfully connecting
var db = require('./config/db');
mongoose.connect(db.url);
var connection = mongoose.connection;
connection.on('error', console.error);
connection.once('open', startServer);

// Start up server
function startServer() {
	var server = app.listen(3000, function() {
		var port = server.address().port;
		console.log('Server running on port ' + port);
	});
}
