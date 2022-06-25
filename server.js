var compression = require('compression');
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
	    
	    res.render('servicesdetail.ejs' , {serviceIdDetail : serviceIddd });
		     
	 });

	 app.get('/servicesdetailstepOne', function(req, res) {

	 	var serviceIddd = req.query.id;
	 	var logindetails = req.query.logindetail;
	 	// console.log(serviceIddd);
	 	// console.log(JSON.stringify(logindetails));
	 	// var fdata = JSON.stringify(logindetails);
	 	const obj = JSON.parse(logindetails);
	 	// console.log(obj);
	 	var logintoken = obj.accessToken;
	 	var loginemail = obj.email;
	 	var loginname = obj.userName;
	 	var loginid = obj.id;
	    
	    res.render('servicesdetailstepOne.ejs' , {serviceIdDetail : serviceIddd , tokens : logintoken , email : loginemail , name : loginname , id : loginid });
		     
	 });

  
  app.post("/charge",async function (req, res) {

    console.log(req.body);
    // console.log(res);
    // return false;
    var email = req.body.emailData;
    var uname = req.body.userName;
    var price = req.body.amount * 100;
    var tokens = req.body.tokendata;



    const stripe = require('stripe')('pk_test_Pbri8k4HUNcegrgjAohigZKF002BpByODh');

    try {


    const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: {
          number: req.body.cardNumber,
          exp_month: req.body.month,
          exp_year: req.body.year,
          cvc: req.body.cvv,
        },
        billing_details: {
          email: req.body.emailData,
          name: req.body.userName
        }
      });

        
          var options = { method: 'POST',
            url: 'https://apistest.tradetipsapp.com/api/stripe/createStripePayment',
            headers: 
             { 'postman-token': 'a1f3bad2-8aab-6d21-7162-d82350e953af',
               'cache-control': 'no-cache',
               authorization: 'Bearer '+tokens },     
               formData: { userName: req.body.name,
               paymentId: paymentMethod.id,
               subscriptionPlanId: req.body.serviceIds } };

          request(options, function (error, response, body) {

          	if(error){
          		alert("error");
          		alert(error);
          	}else{
          		alert("success");
          		alert(response);
          	}
            // if (error) throw new Error(error);

            // {
            //   res.render('incomplete.ejs');
            // }
            // throw new Error(error);

            // console.log(response);
            // console.log(error);
            // console.log(body);
            // res.render('complete.ejs');
          });


        } catch {
     
        return res.redirect('/incomplete');
};


   
 
});

  
  
/////////////////////////////////////////
var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

httpServer.listen(port);
// httpsServer.listen(port);
console.log('The magic happens on port ' + port);