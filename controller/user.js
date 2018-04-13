var mongoose=require('mongoose');

var fs = require('fs');
var User=mongoose.model('User');

//处理用户登录请求
exports.login=function(req,res){
	var username=req.body.username;
	var password=req.body.password;

	User.findOne({username:username},function(err,docs){
		if(err){
			res.json({"status":"error","msg":"error_system"});//系统错误
		}else if(docs==null){
			res.json({"status":"error","msg":"error_username"});//用户名不存在
		}else{
			if(docs.password==password){
				res.json({"status":"success","msg":""});
			}
			else{
				res.json({"status":"error","msg":"error_password"});
			}
		}
	})
}


exports.get_image=function(req,res){
	var username=req.body.username;
	var imageBuf=fs.readFileSync('image/sdf.png');
	res.json({image:imageBuf.toString("base64")});
}
exports.register=function(req,res){
	//var username=req.query.username;
	//var password=req.query.password;
	var icon = req.body.image;
	var username=req.body.username;
	var dataBuffer = new Buffer(icon,'base64');
	fs.writeFile('image/'+username+'.png',dataBuffer,function(err){
		if(err){
			
		}else{
		
		}
	});
	
	var password=req.body.password;

	User.findOne({username:username},function(err,docs){
		if(err){
			res.json({"status":"error","msg":"error_system"});
		}else if(docs==null){
			//保存用户
			var newUser=new User( 
			{
				
				username:username,
				password:password
			});
			newUser.save(function(err){
				if(err){
					res.json({"status":"error","msg":"error_system"});

				}else{
					res.json({"status":"success","msg":""});//注册成功
				}
			});
		}else{
			res.json({"status":"error","msg":"user_exist"});//用户已经被注册
		}
	})
}