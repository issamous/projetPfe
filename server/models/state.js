const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StateSchema = new Schema({
	name:{
		type:String,
		require:true,
		unique: true
	},
	latitude:{
		type:Number,
		require:true,
		unique: true
	},
	longitude:{
		type:Number,
		require:true,
		unique: true
	}
});
const State = mongoose.model('State', StateSchema);

module.exports = State;
