var mongoose=require('mongoose');

var Math=mongoose.model('Math');

var ObjectID = require('mongodb').ObjectID;

exports.search_gongshi=function(req,res){
	Math.find(function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
		}
	});
}
exports.mathpic=function(req,res){
	var id=req.body.id;
	Math.findOne({'_id':ObjectID(id)},{math:1},function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result.get("math"));
		}
	});
}
