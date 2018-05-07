var User=require('../controller/user');

var Xinde=require('../controller/xinde');

var Weizhi=require('../controller/weizhi');

var Comment=require('../controller/comment');

var Vac = require('../controller/vac');

var New = require('../controller/new');

var Article=require('../controller/article');
var Math=require('../controller/math');
var Share=require('../controller/share');
module.exports=function(app){
	app.post('/login',User.login);
	app.post('/register',User.register);
	app.post('/publish',Xinde.publish);
	app.post('/publish_weizhi',Weizhi.publish);
	app.post('/publish_comment',Comment.publish_comment);
	app.post('/search',Xinde.search);
	app.post('/search_weizhi',Weizhi.search);
	app.post('/search_math',Xinde.search_math);
	app.post('/search_eng',Xinde.search_eng);
	app.post('/get_image',User.get_image);
	app.post('/search_comment',Xinde.search_comment);
	app.post('/publish_newscomment',Comment.publish_newscomment);
	app.post('/vac',Vac.vac);
	app.post('/new',New.new);
	app.post('/search_gongshi',Math.search_gongshi);
	app.post('/search_newscomment',New.search_newscomment);
	app.post('/mathpic',Math.mathpic);
	app.post('/search_article',Article.search_article);
	app.post('/myxinde',Xinde.myxinde);
	app.post('/myweizhi',Weizhi.myweizhi);
	app.post('/publish_share',Share.publish_share);
	app.post('/search_share',Share.search_share);
	app.post('/search_sharecomment',Share.search_sharecomment);
	app.post('/publish_sharecomment',Comment.publish_sharecomment);
};
