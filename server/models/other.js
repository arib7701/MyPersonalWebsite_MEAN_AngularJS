var mongoose = require('mongoose');

module.exports = mongoose.model('Other', {
  name: String,
  startingDate: String,
  logo: String,
  pics: Array,
  description: String,
  skills: Array
});