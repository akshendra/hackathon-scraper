var express = require('express');
var router = express.Router();
var scraper = require('../scraper/index')
var models = require('../models/');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/search',function(req , res){
	scraper('node js',function(err , data){
		if (err) {
			console.log(err);
			res.json(err);
		}
		else{
			res.render('search', {
				urls: data
			});
		}
	});
});

router.get('/collections/create', function(req, res) {
	res.render('create_collection');
});

router.post('/collections', function(req, res) {

	models.Collection.build({
		title: req.body.name
	}).save().then(function() {
		res.redirect('/collections');
	})

});

router.get('/collections', function(req, res) {
	models.Collection.findAll().then(function(collections) {
		res.render('all_collections', {
			collections: collections
		});
	});
});

module.exports = router;
