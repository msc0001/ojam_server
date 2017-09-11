var mongoose = require('mongoose');

var clientsSchema = new mongoose.Schema({
	email : String,
		
	subscribedOn : {
		type: String,
		default: ""
	}
});

var Client = mongoose.model('myclient', clientsSchema);

module.exports = Client;