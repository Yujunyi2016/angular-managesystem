manageSystem.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'view/homepage.html',
        controller: 'CarouselDemoCtrl'
      }).
      when('/users', {
        templateUrl: 'view/manager.html',
        controller: 'ManagerCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
