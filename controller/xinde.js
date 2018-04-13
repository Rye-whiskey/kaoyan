var mongoose=require('mongoose');

var Xinde=mongoose.model('Xinde');

exports.publish=function(req,res){
	var username=req.body.username;
	var title=req.body.title;
	var content=req.body.content;
	var key=req.body.key;

	var newXinde = new Xinde(
			{
				username:username,
				title:title,
				content:content,
				key:key
			}
		);	
	newXinde.save(function(err){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json({"status":"success","msg":""});
		}
	});
}


exports.search=function(req,res){
	Xinde.find(function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
			console.log(result[0]);
		}
	});
}


exports.search_math=function(req,res){
	var key=req.body.key;
	Xinde.find({'key':'数学'},function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
		}
	});
}
exports.search_eng=function(req,res){
	var key=req.body.key;
	Xinde.find({'key':'英语'},function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
		}
	});
}