const express = require('express');
const router = express.Router();
const State = require('../models/state');
const bodyParser = require('body-parser');
router.get('/',(req,res) => {
    res.send("api works");
});
router.post('/add', function(req, res){
	var state = new State(
			{
				name:req.body.name,
				latitude:req.body.lat,
				longitude:req.body.long,
			}
		);
		state.save((err,insertedstate) => {
			if (err) {
				console.log(err);
				if (err.code == 11000 ) {
					res.json({ message : 'state already exists' });
				}
				else {
					res.send(err);
				}
            }
            else{
                res.json(insertedstate);
            }
		});
});
router.get('/states', function(req, res){
	State.find({},function(err,state){
		res.json(state);
    });
});
module.exports = router;