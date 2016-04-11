var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema  = new Schema({
  firstName : String,
  lastName  : String,
  email     : String,
  tag       : String,
  user_id   : String,
});

//find out module.exports function
module.exports = mongoose.model('user', userSchema);
