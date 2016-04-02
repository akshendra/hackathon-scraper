var request = require('request');
var cheerio = require('cheerio');
function getData(query ,callback){
request({
	url : 'http://google.com/search',
	qs  : {q:query,num:100},
	method : 'GET'
}, function(err, response, body) {
	if (err) {
		callback(err,null);
	} else {
		var $ = cheerio.load(body);
		var links = $('h3.r a');
		var urls = [];
		console.log(urls);
		links.each(function(i,link){
			var google={};
			var url = $(link).attr('href');
			var text = $(link).text();
			url = url.match('(?=http|https).*(?=&sa)');
			if (url !== null) {
				google.url = url[0];
				google.title = text;
				urls.push(google);
			}
		});
		 callback(null,urls);
	}
});
}

module.exports = getData;