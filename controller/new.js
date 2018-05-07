var mongoose=require('mongoose');

var New=mongoose.model('New');

var ObjectID = require('mongodb').ObjectID;
exports.new=function(req,res){
	
	New.find(function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
			
		}
	});
}
exports.search_newscomment=function(req,res){
	var id=req.body.id;
	New.findOne({'_id':ObjectID(id)},{comments:1},function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result.get("comments"));
		}
	});
}
