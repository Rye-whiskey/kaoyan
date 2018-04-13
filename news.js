const superagent = require('superagent');
const cheerio = require('cheerio');

const reptileUrl="http://www.jianshu.com/"


/**
 * 处理空格和回车
 * @param text
 * @returns {string}
 */
function replaceText(text) {
  return text.replace(/\n/g, "").replace(/\s/g, "");
}


superagent.get(reptileUrl).end(function(err,res){
	if(err){
		return throw Error(err);
	}
	//解析数据
	let $ = cheerio.load(res.text);

	let data = [];
	//获取数据
	$('#list-container .note-list li').each(function (i,elem){
		let _this = $(elem);
		data.push({
			id:_this.attr('data-note-id'),
			slug:_this.find('.title').attr()
		})
	})
});