const mongoose = require('mongoose');
// for further reference, instead of merncrud, we should use a more descriptive name for the database, next time
const mongoURI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/loremSimpson';

//CONNECT TO MONGO
mongoose.connect(mongoURI, { useNewURLParser: true }, () =>
	console.log('MongoDB connection established:', mongoURI)
);
mongoose.Promise = Promise;

module.exports = mongoose;
