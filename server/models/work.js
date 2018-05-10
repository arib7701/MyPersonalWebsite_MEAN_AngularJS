var mongoose = require('mongoose');

module.exports = mongoose.model('Work', {
  name: String,
  company: String,
  startingDate: String,
  endingDate: String,
  logo: String,
  town: String,
  state: String,
  country: String,
  urls: Array,
  descriptions: Array,
  hours: Number,
  technologies: Array,
  skills: Array
});