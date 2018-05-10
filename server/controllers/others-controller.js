var Other = require('../models/other');

/*module.exports.create = function (req, res) {
  var other = new Other(req.body);
  other.save(function (err, result) {
    res.json(result);
  });
}*/

module.exports.list = function (req, res) {

  Other.find({}, null, {sort: '-startingDate'}, function (err, results) {
    console.log('into list server side');
    res.json(results);
  });
}