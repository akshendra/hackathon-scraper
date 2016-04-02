var scraper = require('./index');

scraper('node', function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
})