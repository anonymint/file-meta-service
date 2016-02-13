'use stricts';

var path = process.cwd();
var Controller = require(path + '/app/controller/fileController.js');
var timeController = new Controller();

module.exports = function(app) {

	app.route('/')
		.get(function(req, res){
			res.sendFile(path + "/public/index.html");
		});

	app.route('/api/upload')
		.get(function(req, res){
			res.send('Upload API doesn\'t support get');
		})
		.post(function(req,res) {

		});

	app.route('/*')
		.get(function(req,res){
			res.redirect('/');
		});
};