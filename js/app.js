var app = angular.module('cjvApp', ['ui.router', 'restangular']);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(
  ['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
  function($stateProvider, $urlRouterProvider, RestangularProvider) {

    // Restangular
    RestangularProvider.setBaseUrl('https://api.github.com/users/cjvirtucio87');

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('projects', {
        abstract: true,
      })
      .state('projects.index', {
        url: '/',
        views: {
          index: {
            templateUrl: 'js/templates/projects_index.html',
            controller: 'ProjectsCtrl'
          }
        },
        resolve: {
          projects: ['ProjectService', function(ProjectService){
            return ProjectService.all();
          }]
        }
      });
}]);
