//mongoose module
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	username : String,
	password : String
});

// schema methods ================
userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8), null);
};

userSchema.methods.checkPassword = function(password){
	return bcrypt.compareSync(password,this.local.password);
};


//export user model
module.exports = mongoose.model('User', userSchema);

