/**
 * Created by Dharmendra on 3/26/2016.
 */
(function() {

    var contactUsController = function($scope,contactUsFactory) {

    	$scope.showValidation = false;
        $scope.contact = {
                name:'',
                email:'',
                message:''
            };
        
        $scope.successMsg = '';

        $scope.send = function() {
        	
            $scope.showValidation = true;
            
            if($scope.contactUsForm.$valid){
                //rest call to update
                contactUsFactory.saveEquiry($scope.contact).success(function(){
                	$scope.contact = {
                			name:'',
                			email:'',
                			message:''
                	};
                	$scope.successMsg = "Thank you for contacting.";
                	$scope.showValidation = false;
                }).error(function(){
                	$scope.successMsg = "There is some server side issue. Please try again later";
                });
            }
        };
    };

    contactUsController.$inject = ['$scope','contactUsFactory'];

    angular.module('app').controller("contactUsController", contactUsController );

}());