var mongoose=require('mongoose');

var Vac=mongoose.model('Vac');

exports.vac=function(req,res){
	
	Vac.find(function(err,result){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else{
			res.json(result);
			
		}
	});
}