(function(){
    var recommendationsFactory = function($http) {

        var url="http://site-vdharam.rhcloud.com/testimonial";

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