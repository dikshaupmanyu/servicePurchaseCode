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
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');


 
	app.use(compression());
	app.use(cors());

	app.set('view engine', 'ejs'); // set up ejs for templating
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.static('dist'));


// routes ======================================================================
//require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
// app.listen(port);


 app.get('/servicesdetail', function(req, res) {

 	var serviceIddd = req.query.id;

    
    res.render('servicesdetail.ejs' , {serviceIdDetail : serviceIddd });
	     
 });

  
  
/////////////////////////////////////////
var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
// httpsServer.listen(port);
console.log('The magic happens on port ' + port);