var express = require('express')
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(require('../middleware/headers.js'));
app.use(require('../middleware/validate-session.js'));

app.use('/test',function(req,res){
  res.send('hello world')
});

app.use('/api/users',require('./routes/users'));
app.use('/api/login',require('./routes/sessions'));
app.use('/api/definitions', require('./routes/definitions'));

app.listen(3000,function(){
  console.log('app is listening on port 3000');
});
