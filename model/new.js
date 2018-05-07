var mongoose=require('mongoose');

var newschema=new mongoose.Schema({
	title:String,
	content:String,
	comments:[
		{
			username:String,
			time:String,
			comment:String

		}
	]
});

mongoose.model('New',newschema);
