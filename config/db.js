var db = require('mongoose');

db.connect('mongodb://Test1:Test1@ds037145.mongolab.com:37145/nodeapi');


module.exports = db;
