angular.module('resume-app')

.controller('skillsController', ['$scope', '$resource', function($scope, $resource){

	var Skill = $resource('/api/skills');

	  Skill.query(function (results) {
	    $scope.skills = results;
	  });

	  $scope.max = 5;
	  $scope.isReadonly = true;

	  $scope.ratingStates = [
	    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	    {stateOn: 'glyphicon-heart'},
	    {stateOff: 'glyphicon-off'}
	  ];

	  $scope.skills = []

	  /*$scope.createSkill = function () {
	    var skill = new Skill();
	    skill.type = $scope.skillType;
	    skill.subtype = $scope.skillSubtype;
	    skill.name = $scope.skillName;
	    skill.level = $scope.skillLevel;

	    skill.$save(function (result) {
	      $scope.skills.push(result);
	      $scope.skillType = '';
	      $scope.skillSubtype = '';
	      $scope.skillName = "";
	      $scope.skillLevel = "";
	    });
	  }*/
}]);

