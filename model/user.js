var mongoose=require('mongoose');

var userschema=new mongoose.Schema({
	icon:String,
	username:String,
	password:String,
	mydanci:[
	{
		name:String
	}
	],
	myzuowen:[
	{
		name:String
	}
	],
	mygongshi:[
	{
		name:String
	}
	]
});

mongoose.model('User',userschema);
