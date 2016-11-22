var app = angular.module('cjvApp', ['ui.router', 'restangular']);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

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