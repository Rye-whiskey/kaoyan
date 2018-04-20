var mongoose=require('mongoose');

var Xinde=mongoose.model('Xinde');
var ObjectID = require('mongodb').ObjectID;

exports.publish_comment=function(req,res){
	var username=req.body.username;
	var comment=req.body.comment;
	var d=new Date();

	var id=req.body.id;

	Xinde.update({'_id':ObjectID(id)},{$push:{"comments":{"username":username,"comment":comment,"time":d}}},function(err){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json({"status":"success","msg":""});
		}
	});
}
