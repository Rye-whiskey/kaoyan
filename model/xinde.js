var mongoose=require('mongoose');

var xindeschema=new mongoose.Schema({
	username:String,
	title:String,
	content:String,
	key:String,
	createTime:{
		type:Date,
		default:Date.now
	},
	updateTime:{
		type:Date,
		default:Date.now
	},
	comments:[
		{
			username:String,
			time:String,
			comment:String
		}
	]},
	{
		timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
});

mongoose.model('Xinde',xindeschema);