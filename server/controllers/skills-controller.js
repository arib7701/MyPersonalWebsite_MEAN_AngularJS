var Skill = require('../models/skill');

/*module.exports.create = function (req, res) {
  var skill = new Skill(req.body);
  skill.save(function (err, result) {
    res.json(result);
  });
}*/

module.exports.list = function (req, res) {
  Skill.find({}, function (err, results) {
    res.json(results);
  });
}