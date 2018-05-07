var mongoose=require('mongoose');

var Article=mongoose.model('Article');

var ObjectID=require('mongodb').ObjectID;

exports.search_article=function(req,res){
	Article.find(function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);	
		}
	});
}
