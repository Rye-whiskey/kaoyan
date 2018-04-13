var mongoose=require('mongoose');

var userschema=new mongoose.Schema({
	icon:String,
	username:String,
	password:String
});

mongoose.model('User',userschema);