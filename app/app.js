
// Declare app level module which depends on views, and components
var soccer = angular.module ('soccer', ['ngRoute', 'myApp.version']);
soccer.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
