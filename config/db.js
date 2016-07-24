// Configure the db
var env = process.env.NODE_ENV;

if (env === 'prod') {
	module.exports = {
		url : 'mongodb://jbisa:aunap123@ds029725.mlab.com:29725/aunap_db'
	}
} else {
	var databaseName = 'aunap_db';
	module.exports = {
		url : 'mongodb://localhost/' + databaseName
	}
}

