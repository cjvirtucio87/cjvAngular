var app = angular.module('cjvApp', ['ui.router', 'restangular']);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
        // HTTP
        $httpProvider.defaults.headers.common.Authorization = 'Token e87ff33a69697d863a40d2eb0b4d7a2c34fd373e';
        // Routing
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('landing', {
            url: '/',
            views: {
                '@': {
                    templateUrl: 'js/templates/unnamed.html'
                },
                '1@': {
                    templateUrl: 'js/templates/one.html'
                },
                '2@': {
                    templateUrl: 'js/templates/two.html'
                },
                '3@': {
                    templateUrl: 'js/templates/three.html'
                }
            }
        });
    }]);