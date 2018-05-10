var Edu = require('../models/edu');

/*module.exports.create = function (req, res) {
  var edu = new Edu(req.body);
  edu.save(function (err, result) {
    res.json(result);
  });
}*/

module.exports.list = function (req, res) {
  Edu.find({}, null, {sort: '-endingDate'}, function (err, results) {
    res.json(results);
  });
}