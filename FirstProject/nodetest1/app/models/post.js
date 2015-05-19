//app/models/post.js

var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
	title : String,
	content : String,
	author : String,
	date : { type : Date, default : Date.now },

});

module.exports = mongoose.model('Post',postSchema);