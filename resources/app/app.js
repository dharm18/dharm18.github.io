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
