/**
 * Created by Dharmendra on 3/26/2016.
 */
(function() {

    var recommendationsController = function($scope,recommendationsFactory) {

        $scope.recommendations = []; 
        	
        recommendationsFactory.retrieve().success(function(data){
        	$scope.recommendations = data;
        });
    };

    recommendationsController.$inject = ['$scope','recommendationsFactory'];

    angular.module('app').controller("recommendationsController", recommendationsController );

}());