app.factory('ProjectService',
['Restangular', '_', function(Restangular, _) {

  var ProjectService = {};
  var _projects = [];

  function _cacheProjects () {
    return Restangular.all('repos')
               .getList({
                 type: 'owner',
                 sort: 'updated',
                 direction: 'desc'
               })
               .then(function(response) {
                 angular.copy(response,_projects);
                 return _projects;
               })
               .catch(function(reason) {
                 console.log(reason);
               });
  }

  ProjectService.all = function() {
    if (_.isEmpty(_projects)) {
      return _cacheProjects();
    } else {
      return _projects;
    }
  };

  return ProjectService;

}]);
