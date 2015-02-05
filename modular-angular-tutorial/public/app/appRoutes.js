angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'app/modules/home/home-view.html',
            controller: 'HomeController'
        })

    $locationProvider.html5Mode(true);

}]);