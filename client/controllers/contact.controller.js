angular.module('resume-app')

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http){

	$scope.message = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };     
    var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
    
    $scope.channels = channels;
    $scope.invalidChannelSelection = false;

    $scope.sendMessage = function() {

    	console.log($scope.message);
                
        if ($scope.message.agree && ($scope.message.mychannel === "")) {
            $scope.invalidChannelSelection = true;
            console.log('incorrect');
        }
        else {
            $scope.invalidChannelSelection = false;

             $http.post('/contactform', $scope.message).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                     console.log('success send mess - client side');
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            
            $scope.message = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            $scope.message.mychannel="";
            $scope.messageForm.$setPristine();
        }
    };

}])

