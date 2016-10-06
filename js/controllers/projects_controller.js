app.controller('ProjectsCtrl',
['ProjectService', 'projects',  '$scope',
function(ProjectService, projects, $scope) {

  $scope.projects = projects;

}]);
