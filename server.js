// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var vocabulary = require('./modules/routes/vocabulary');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use('/vocabulary', vocabulary);

//globals
var port = process.env.PORT || 4000;


// spin up the server
app.listen(port, function(){
  console.log('server up on port:', port);
}); // end the server spin up
