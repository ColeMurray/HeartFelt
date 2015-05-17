//mongoose module
var mongoose = require('mongoose');

//export user model
module.exports = mongoose.model('User',{
    "username" : {type : String, required: true},
    "password" : {type:String, required: true}
    }
);
