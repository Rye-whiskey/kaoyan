var mongoose=require('mongoose');
var config=require('./db_url.js');

module.exports=function(){
	var db=mongoose.connect(config.mongodb);
	require('../model/user.js');
	require('../model/xinde.js');
	require('../model/vac.js');
	require('../model/new.js');
	require('../model/weizhi.js');
	require('../model/math.js');
	require('../model/article.js');
	require('../model/share.js');
	return db;
}
