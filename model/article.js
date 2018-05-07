var mongoose=require('mongoose');

var articleschema=new mongoose.Schema({
	title:String,
	direction:String,
	a1:String,
	a2:String,
	a3:String,
	t1:String,
	t2:String,
	t3:String
});

mongoose.model('Article',articleschema);
