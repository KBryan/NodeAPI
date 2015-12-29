var db = require('../config/db');

var LogSchema = db.Schema({
  description:String,
  result,String,
  data:{type:Date,default:Date.now },
  owner: {type:db.Schema.Types.ObjectId, ref:'User'},
  definition:{type:db.Schema.Types.ObjectId, ref:'Definition'}
});
