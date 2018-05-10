var mongoose = require('mongoose');

module.exports = mongoose.model('Skill', {
  type: String,
  subtype: String,
  name: String,
  level: String
});