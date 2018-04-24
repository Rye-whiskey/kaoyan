var mongoose=require('mongoose');

var New=mongoose.model('New');

exports.new=function(req,res){
	
	New.find(function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
			
		}
	});
}