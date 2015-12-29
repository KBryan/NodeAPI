var db = require('../config/db');
var LogSchema = require('./log-schema');
var Log = db.model('Log', LogSchema);

module.exports = Log;
