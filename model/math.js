var mongoose=require('mongoose');

var mathschema=new mongoose.Schema({
	title:String,
	math:[
		{
			name:String
		}
	]
});

mongoose.model('Math',mathschema);
