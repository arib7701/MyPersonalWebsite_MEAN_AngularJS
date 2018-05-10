angular.module('resume-app')

.controller('edusController', ['$scope', '$resource', function ($scope, $resource) {
  
  var Edu = $resource('/api/edus');

  Edu.query(function (results) {
    $scope.edus = results;
  });

  $scope.edus = []

  /*$scope.createEdu = function () {
    var edu = new Edu();
    edu.schoolname = $scope.eduSchoolName;
    edu.level = $scope.eduLevel;
    edu.diploma = $scope.eduDiploma;
    edu.startingDate = $scope.edustartingDate;
    edu.endingDate = $scope.eduendingDate;
    edu.logo = $scope.edulogo;
    edu.town = $scope.edutown;
    edu.state = $scope.edustate;
    edu.country = $scope.educountry;
    edu.classes = $scope.educlasses;
    edu.projects = $scope.eduprojects;
    edu.gpa = $scope.edugpa;

    edu.$save(function (result) {
      $scope.edus.push(result);
      $scope.eduSchoolName = '';
      $scope.eduLevel = '';
      $scope.eduDiploma = '';
      $scope.edustartingDate = "";
      $scope.eduendingDate = "";
      $scope.edulogo = "";
      $scope.edutown = "";
      $scope.edustate = "";
      $scope.educountry = "";
      $scope.educlasses = "";
      $scope.eduprojects = "";
      $scope.edugpa = "";
    });
  }*/
}]);

