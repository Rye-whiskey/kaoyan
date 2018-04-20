var User=require('../controller/user');

var Xinde=require('../controller/xinde');

var Comment=require('../controller/comment');

module.exports=function(app){
	app.post('/login',User.login);
	app.post('/register',User.register);
	app.post('/publish',Xinde.publish);
	app.post('/publish_comment',Comment.publish_comment);
	app.post('/search',Xinde.search);
	app.post('/search_math',Xinde.search_math);
	app.post('/search_eng',Xinde.search_eng);
	app.post('/get_image',User.get_image);
	app.post('/search_comment',Xinde.search_comment);
};