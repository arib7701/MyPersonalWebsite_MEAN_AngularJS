var mongoose = require('mongoose');

module.exports = mongoose.model('Edu', {
  schoolname: String,
  level: String,
  diploma: String,
  startingDate: String,
  endingDate: String,
  logo: String,
  town: String,
  state: String,
  country: String,
  url: String,
  classes: Array,
  projects: Array,
  gpa: String,
});