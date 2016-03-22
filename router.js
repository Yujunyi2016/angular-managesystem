manageSystem.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/homepage', {
        templateUrl: 'view/homepage.html',
        controller: 'CarouselDemoCtrl'
      }).
      when('/homepage/manager', {
        templateUrl: 'view/manager.html',
        controller: 'managerctrl'
      }).
      otherwise({
        redirectTo: '/homepage'
      });
  }]);
