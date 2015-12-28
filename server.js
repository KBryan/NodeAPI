var express = require('express')
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use('/test',function(req,res){
  res.send('hello world')
});

app.use('/api/users',require('./routes/users'));

app.listen(37145,function(){
  console.log('app is listening on port 3715');
});
