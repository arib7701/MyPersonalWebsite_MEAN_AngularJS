angular.module('resume-app')

.controller('worksController', ['$scope', '$resource', function ($scope, $resource) {
  
  var Work = $resource('/api/works');

  Work.query(function (results) {
    $scope.works = results;
  });

  $scope.works = []

  /*$scope.createWork = function () {
    var work = new Work();
    work.name = $scope.workName;
    work.company = $scope.workCompany;
    work.startingDate = $scope.workstartingDate;
    work.endingDate = $scope.workendingDate;
    work.logo = $scope.worklogo;
    work.town = $scope.worktown;
    work.state = $scope.workstate;
    work.country = $scope.workcountry;
    work.url = $scope.workurl;
    work.description = $scope.workdescription;

    work.$save(function (result) {
      $scope.works.push(result);
      $scope.workName = '';
      $scope.workCompany = '';
      $scope.workstartingDate = "";
      $scope.workendingDate = "";
      $scope.worklogo = "";
      $scope.worktown = "";
      $scope.workstate = "";
      $scope.workcountry = "";
      $scope.workurl = "";
      $scope.workdescription = "";
    });
  }*/
}]);