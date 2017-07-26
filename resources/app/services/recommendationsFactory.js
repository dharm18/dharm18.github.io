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