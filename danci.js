// 一些依赖库
var http = require("http"),
    url = require("url"),
    superagent = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async"),
    eventproxy = require('eventproxy');
var mongoose= require('mongoose');
var Vac=mongoose.model('Vac');

 
var ep = new eventproxy(),
    urlsArray = [], //存放爬取网址
    pageUrls = [],  //存放收集文章页面网站
    pageNum = 200;  //要爬取文章的页数
 

    pageUrls.push('https://www.shanbay.com/wordbook/34/');

 
// 主start程序
function start(){
    function onRequest(req, res){  
        // 轮询 所有文章列表页
        pageUrls.forEach(function(pageUrl){
            superagent.get(pageUrl)
                .end(function(err,pres){
              // pres.text 里面存储着请求返回的 html 内容，将它传给 cheerio.load 之后
              // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
              // 剩下就都是利用$ 使用 jquery 的语法了
              var $ = cheerio.load(pres.text);
              var curPageUrls = $('.wordbook-wordlist-name a');
 
              for(var i = 0 ; i < curPageUrls.length ; i++){
                var articleUrl = curPageUrls.eq(i).attr('href');
                urlsArray.push(articleUrl);
                // 相当于一个计数器
                ep.emit('BlogArticleHtml', articleUrl);
              }
            });
        });
 
        ep.after('BlogArticleHtml', pageUrls.length*29 ,function(articleUrls){
        // 当所有 'BlogArticleHtml' 事件完成后的回调触发下面事件
        // ...
        res.write('<br/');
        res.write('articleUrls.length is ' + articleUrls.length+'<br/>');
        for(var i = 0; i <articleUrls.length; i++){
          res.write('articleUrl is ' +articleUrls[i] + '<br/>')
        }

        var arr=[];
        var means=[];

        articleUrls.forEach(function(articleUrl){
            superagent.get('https://www.shanbay.com'+articleUrl)
                .end(function(err,pres){
                  var $ = cheerio.load(pres.text);
                  var curUnit = $('.span2');
                  var curmeans = $('.span10')
                  for(var i = 0;i<curUnit.length;i++){

                    var name = curUnit.eq(i).text();
                    var mean = curmeans.eq(i).text();
                    means.push(mean);
                    arr.push(name);
                    ep.emit('Danci',name);
                  }
                    

                });
        });
        ep.after('Danci',articleUrls.length*20,function(names){
          res.write('<br/');
        res.write('articleUrls.length is ' + names.length+'<br/>');
        for(var i = 0; i <names.length; i++){
          var newVac = new Vac(
          {
              name:arr[i],
              means:means[i]
          });

          newVac.save();


          console.log(means[i]);
         
        }
        });







        });
    }
    http.createServer(onRequest).listen(3000);
}
exports.start= start;