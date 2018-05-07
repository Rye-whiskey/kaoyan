var mongoose=require('mongoose');

var Xinde=mongoose.model('Xinde');
var New=mongoose.model('New');
var ObjectID = require('mongodb').ObjectID;
var moment=require('moment');
var Share=mongoose.model('Share');

exports.publish_comment=function(req,res){
	var username=req.body.username;
	var comment=req.body.comment;
	var d=moment().format('MM-DD HH:mm');

	var id=req.body.id;

	Xinde.update({'_id':ObjectID(id)},{$push:{"comments":{"username":username,"comment":comment,"time":d}}},function(err){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json({"status":"success","msg":""});
		}
	});
}
exports.publish_newscomment=function(req,res){

	var username=req.body.username;
	var comment=req.body.comment;
	var d=moment().format('MM-DD HH:mm');

	var id=req.body.id;

	New.update({'_id':ObjectID(id)},{$push:{"comments":{"username":username,"comment":comment,"time":d}}},function(err){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json({"status":"success","msg":""});
		}
	});
			
}
exports.publish_sharecomment=function(req,res){
	var username=req.body.username;
	var comment=req.body.comment;
	var d=moment().format('MM-DD HH:mm');

	var id=req.body.id;
	Share.update({'_id':ObjectID(id)},{$push:{"comments":{"username":username,"comment":comment,"time":d}}},function(err){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json({"status":"success","msg":""});
		}
});
}
