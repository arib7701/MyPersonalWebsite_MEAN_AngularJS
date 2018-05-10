angular.module('resume-app')

.controller('workDetailsController', ['$scope', '$resource', '$stateParams', function ($scope, $resource, $stateParams) {

  var Work = $resource('/api/works/:workId');

  $scope.work = Work.get({workId: $stateParams.workId });

}]);

