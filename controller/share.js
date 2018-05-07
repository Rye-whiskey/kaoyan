var mongoose= require('mongoose');

var fs=require('fs');

var moment=require('moment');
var Share=mongoose.model('Share');
exports.publish_share=function(req,res){
	var icon = req.body.image;
	var title=req.body.title;
	var content=req.body.content;
	var username=req.body.username;
	var d=moment().format('MM-DD HH:mm');
	var dataBuffer=new Buffer(icon,'base64');
	fs.writeFile('/usr/local/kaoyan/kaoyan/public/images/'+title+'.png',dataBuffer,function(err){
		if(err){

		}else{
		}
	});
	var newShare = new Share(
		{
			username:username,
			title:title,
			content:content,
			time:d
		}
	);
	newShare.save(function(err){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json({"status":"success","msg":""});
		}
	});
}
exports.search_share=function(req,res){
	Share.find(function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
		}
	});
}
exports.search_sharecomment=function(req,res){
	var id=req.body.id;
	Share.findOne({'_id':ObjectID(id)},{comments:1},function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result.get("comments"));
		}
	});
}
