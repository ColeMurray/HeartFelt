var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function(req, res) {
	var db = req.db;
	db.get('usercollection').find({},{}, function(err, result){
		if (err){
			res.send("Error fetching userlist");
		}else{
			res.send(result);
		}
	});
});

module.exports = router;
