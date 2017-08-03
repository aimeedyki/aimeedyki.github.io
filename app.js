const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const passport   = require('passport');

require('dotenv').config();

// Set up the express app
const app = express();
// sets the view engine to 

/*app.set('views', __dirname+'/template');
app.set('view engine', '.ejs');
app.engine('ejs', require('ejs').renderFile);*/


// Logs requests to the console.
app.use(logger('dev'));

//renders landing page



// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Require routes into the application.
require('./server/routes')(app);


/*displays our pages
 app.get('/',  (req, res)=> {  
  res.render('main.ejs');
});
  app.get('/userPage',  (req, res)=> {  
  res.render('userPage.ejs');
});
   app.get('/adminpage',  (req, res)=> {  
  res.render('adminpage.ejs');
});*/

// Setup a default catch-all route that sends back a welcome message in JSON format.
//app.get('*', (req, res) => res.status(200).send({
  //message: 'Welcome to the beginning of nothingness.',
//}));

module.exports = app;