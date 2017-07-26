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