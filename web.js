var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(256);
buf = fs.readFileSync('index.html', 'utf8');
app.get('/', function(request, response) {
   response.send (buf.toString('utf8', 0, buf.length));
});

//app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
