var mongoose=require('mongoose');

var Weizhi=mongoose.model('Weizhi');

var ObjectID = require('mongodb').ObjectID;

exports.publish=function(req,res){
	var username=req.body.username;
	var weizhi=req.body.weizhi;
	var ltime=req.body.ltime;

	var newWeizhi = new Weizhi(
			{
				username:username,
				weizhi:weizhi,
				ltime:ltime
			}
		);	
	newWeizhi.save(function(err){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json({"status":"success","msg":""});
		}
	});
}





exports.search=function(req,res){
	Weizhi.find(function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
			
		}
	});
}

exports.myweizhi=function(req,res){
	var username=req.body.username;
	Weizhi.find({'username':username},function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
		}
	});
}
