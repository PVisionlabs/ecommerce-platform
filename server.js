var express = require('express');
var morgan = require('morgan');

var app = express();

//Middleware
app.use(morgan('dev'));


app.get('/', function(req, res) {
  var name = " Vision Labs"
 res.json("My Name is"+ name);

});

app.get('/catname', function(req, res) {
  res.json('Morgan Test');

})


app.listen(3000, function(err){
  if (err) throw err;
  console.log("Server is Running on port 3000");
});
