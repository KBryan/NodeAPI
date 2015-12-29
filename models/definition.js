var db = require('../config/db');
var DefinitionSchema = require('./definitions-schema');

var Definition = db.model('Definition', DefinitionSchema);

module.exports = Definition;
