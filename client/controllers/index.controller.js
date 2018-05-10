angular.module('resume-app')

.controller('navController', ['$scope', '$location', '$routeParams', '$stateParams', function($scope, $location, $routeParams, $stateParams){

    $scope.$on('$locationChangeSuccess', function(/* EDIT: remove params for jshint */) {
        var path = $location.path();
        var part = path.split('/');

        if(part[1] === "fr"){
            $scope.navtemplateUrl = 'views/fr.nav.html';
            $scope.footertemplateUrl = 'views/fr.footer.html';
        }else{
            $scope.navtemplateUrl = 'views/nav.html';
            $scope.footertemplateUrl = 'views/footer.html';
        }
     });	
}])


