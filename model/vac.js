var mongoose=require('mongoose');

var vacschema=new mongoose.Schema({
	name:String,
	means:String
});

mongoose.model('Vac',vacschema);