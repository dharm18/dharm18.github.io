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