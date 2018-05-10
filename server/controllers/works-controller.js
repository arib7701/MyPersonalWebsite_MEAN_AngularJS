var Work = require('../models/work');

/*module.exports.create = function (req, res) {
  var work = new Work(req.body);
  work.save(function (err, result) {
    res.json(result);
  });
}*/

module.exports.list = function (req, res) {

  Work.find({}, null, {sort: '-startingDate'}, function (err, results) {
    console.log('into list server side');
    res.json(results);
  });
}

module.exports.get = function (req, res, next) {

	Work.findById(req.params.workId, function (err, work) {
    console.log('into get server side');
    if (err) {
      res.send(err);
    }
    res.json(work);
  });
}