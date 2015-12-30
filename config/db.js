var db = require('mongoose');

db.connect('mongodb://YourUserName:YourPassWord@ds00000.mongolab.com:000000/YOURDATABASENAME');

module.exports = db;
