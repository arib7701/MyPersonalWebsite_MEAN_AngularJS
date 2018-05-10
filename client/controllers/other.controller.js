angular.module('resume-app')

.controller('othersController', ['$scope', '$resource' , function($scope, $resource){

	var Other = $resource('/api/others');

  Other.query(function (results) {
    $scope.others = results;
    console.log($scope.others);
  });

  $scope.others = [];

  /*$scope.createOther = function () {
    var other = new Other();
    other.name = $scope.otherName;
    other.startingDate = $scope.otherStartingDate;
    other.$save(function (result) {
      $scope.others.push(result);
      $scope.otherName = '';
      $scope.otherStartingDate = '';
    });
  }*/

}])

