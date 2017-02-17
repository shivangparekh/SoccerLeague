soccer.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/',{
      templateUrl: 'pages/dashboard.html',
      controller: 'dashboardCtrl'
  })
  .when('/features', {
      templateUrl: 'pages/features.html',
      controller: 'featuresCtrl'
  })
  .when('/login', {
      templateUrl: 'pages/adminForm.html',
      controller: 'adminFormCtrl'
  })
}]);

