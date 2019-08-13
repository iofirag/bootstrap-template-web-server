/************* Moduls **************/
var express = require('express')

var app = express();
app.use(express.static(__dirname + '/public'));// Serve files from ./public directory


// Configure server host+port
app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 4200);

app.listen(app.get('port'), function(){
  console.log('Web-server listening on ' + app.get('host') + ':' + app.get('port'));
});