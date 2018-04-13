var mongoose=require('mongoose');
var config=require('./db_url.js');

module.exports=function(){
	var db=mongoose.connect(config.mongodb);
	require('../model/user.js');
	require('../model/xinde.js');
	return db;
}