var db = require('../config/db');
var DefinitionSchema = require('./definition-schema');

var Definition = db.model('Definition', DefinitionSchema);

module.exports = Definition;
