var mongoose=require('mongoose');

var shareschema=new mongoose.Schema({
	username:String,
	title:String,
	content:String,
	time:String,
	comments:[
		{
			username:String,
			time:String,
			comment:String
		}
	]
});

mongoose.model('Share',shareschema);
