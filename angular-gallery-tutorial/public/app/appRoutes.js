angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'app/modules/home/home-view.html',
            controller: 'HomeController'
        })

        // gallery
        .when('/gallery', {
            templateUrl: 'app/modules/gallery/gallery-view.html',
            controller: 'GalleryController'
        })

    $locationProvider.html5Mode(true);

}]);