angular.module('Celeb')

.config(function($routeProvider) {
    //this runs automatically when the main module is created
    $routeProvider
	.when('/', {
		templateUrl:'templates/main.html',
		controller: 'MainCtrl'
		})
	.when('/details/:personId', {
		templateUrl:'templates/details.html',
		controller: 'DetailsCtrl'
		})
	.otherwise({redirectTo: '/'});
});