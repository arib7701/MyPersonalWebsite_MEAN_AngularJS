angular.module('resume-app')

.controller('HomeCtrl', ['$scope', '$resource', function($scope, $resource){

	var Work = $resource('/api/works');

	Work.query(function (results) {
	    $scope.workEn = results[0];
	    $scope.workFr = results[1];
	  });

	var Edu = $resource('/api/edus');

	  Edu.query(function (results) {
	    $scope.eduEn = results[0];
	    $scope.eduFr = results[0];
	  });
}])

