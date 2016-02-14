'use stricts';
var path = process.cwd();
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage, limits: { fileSize: 5000000 } }).single('0');

module.exports = function(app) {

	app.route('/')
		.get(function(req, res){
			res.sendFile(path + "/public/index.html");
		});

	app.route('/upload')
		.get(function(req,res) {
			res.sendFile(path + "/public/upload.html");
		});

	app.route('/api/upload')
		.get(function(req, res){
			res.send('Upload API doesn\'t support get');
		})
		.post(function(req,res) {
			upload(req, res, function(err){
				if (err) {
					res.send({data: "something wrong with file"});
				} else {
					res.send({fileSize: req.file.size, fileName: req.file.originalname});
				}								
			});
		});

	app.route('/*')
		.get(function(req,res){
			res.redirect('/');
		});
};