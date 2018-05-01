var mongoose=require('mongoose');

var weizhischema=new mongoose.Schema({
	username:String,
	weizhi:String,
	ltime:String,
	createTime:{
		type:Date,
		default:Date.now
	},
	updateTime:{
		type:Date,
		default:Date.now
	}},
	{
		timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
});

mongoose.model('Weizhi',weizhischema);