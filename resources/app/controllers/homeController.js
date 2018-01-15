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