var mongoose=require('mongoose');

var newschema=new mongoose.Schema({
	title:String,
	content:String
});

mongoose.model('New',newschema);