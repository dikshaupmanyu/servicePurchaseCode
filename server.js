var compression = require('compression')
var express  = require('express');
var app      = express();
var fs      = require('fs');
var port     = process.env.PORT || 8080;
var path = require('path');
var cors = require('cors');
var request = require('request');
var http = require('http');
var https = require('https');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');


 
	app.use(compression());
	app.use(cors());

	app.set('view engine', 'ejs'); // set up ejs for templating
	app.use(express.static(path.join(__dirname, 'public')));

	 app.get('/servicesdetail', function(req, res) {

	 	var serviceIddd = req.query.id;
	 	console.log("hiii");
	    
	    res.render('servicesdetail.ejs' , {serviceIdDetail : serviceIddd });
		     
	 });

  
  
/////////////////////////////////////////
var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
// httpsServer.listen(port);
console.log('The magic happens on port ' + port);