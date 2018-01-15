(function() {
    
    var app = angular.module("app", ['ngRoute','angular-loading-bar','ngAnimate']);

    app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
    }]);

    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: 'resources/app/views/home.html'
            })
            .when('/about', {
            	controller : 'aboutController',
                templateUrl: 'resources/app/views/about.html'
            })
            .when('/contact', {
                controller: 'contactUsController',
                templateUrl: 'resources/app/views/contact.html'
            })
            .when('/recommendations', {
            	controller: 'recommendationsController',
                templateUrl: 'resources/app/views/recommendations.html'
            })
            .when('/experience', {
                templateUrl: 'resources/app/views/experience.html'
            })
            .when('/skills', {
                templateUrl: 'resources/app/views/skills.html'
            })
            .otherwise({ redirectTo: '/'});

            // if(window.history && window.history.pushState){
            //     $locationProvider.html5Mode(true);
            // }
    }]);

    app.directive('bsActiveLink', ['$location', function ($location) {
            return {
                restrict: 'A', //use as attribute
                replace: false,
                link: function (scope, elem) {
                    //after the route has changed
                    scope.$on("$routeChangeSuccess", function () {
                        var hrefs = ['/#' + $location.path(),
                                '#' + $location.path(), //html5: false
                            $location.path()]; //html5: true
                        angular.forEach(elem.find('a'), function (a) {
                            a = angular.element(a);
                            if (-1 !== hrefs.indexOf(a.attr('href'))) {
                                a.parent().addClass('active');
                            } else {
                                a.parent().removeClass('active');
                            };
                        });
                    });
                }
            }
        }]);


}());

(function() {

    var aboutController = function($scope) {
        
    	var calculateExperienceString = function(fromDate,toDate){
    		
    		var diff = Math.floor(toDate.getTime() - fromDate.getTime());
            var day = 1000 * 60 * 60 * 24;
            var days = Math.floor(diff/day);
            var months = Math.floor(days/30);
            var years = Math.floor(months/12);
            var message = years;
            var diffMonths = (months - years*12);
            if(diffMonths > 0) {
            	message = message + "." + diffMonths;
            }
            
            return message;
    		
    	};

    	$scope.yearofExperience = calculateExperienceString(new Date(2013,06,01), new Date());
    };
    
    aboutController.$inject = ['$scope'];

    angular.module('app').controller("aboutController", aboutController );

}());
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
/**
 * Created by hp on 3/7/2016.
 */
(function() {

    var homeController = function($scope) {
        $(".element").typed({
            /*strings: ["Java", "J2EE","Spring","Hibernate","Grails","ZK","JSP","Servlets","Spring MVC","javascript","jQuery","AngularJS",
                "Oracle","MySQL"],*/
                strings: ["Java", "J2EE","Grails","ZK","Javascript","jQuery","AngularJS","JSP","Servlets","Spring MVC",
                    "Oracle","MySQL","Spring","Hibernate","Want to learn Hadoop/Big data","Magic in Data-Science, AI, Intelligent Systems"],
            typeSpeed: 30
        });


    };

    homeController.$inject = ['$scope'];

    angular.module('app').controller("homeController", homeController );

}());
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
(function(){
    var contactUsFactory = function($http) {

        var url="contactUs";

        return {
            saveEquiry: function(contact){

                var config = {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: contact
                };

                return $http(config);
            }
        };

    };

    contactUsFactory.$inject = ['$http'];

    angular.module('app').factory('contactUsFactory',contactUsFactory);
}());
(function(){
    var recommendationsFactory = function($http) {

        var url="testimonial.json";

        return {
        	retrieve: function(){

                var config = {
                    method: 'GET',
                    url: url
                };

                return $http(config);
            }
        };

    };

    recommendationsFactory.$inject = ['$http'];

    angular.module('app').factory('recommendationsFactory',recommendationsFactory);
}());