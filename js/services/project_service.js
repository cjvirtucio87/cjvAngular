app.factory('ProjectService',
['Restangular', '_', function(Restangular, _) {

  var ProjectService = {};
  var _projects;

  ProjectService.all = function() {
    if (_.isEmpty(_projects)) {
      Restangular.all('repos')
                 .getList()
                 .then(function(response) {
                   console.log(response);
                 })
                 .catch(function(reason) {
                   console.log(reason);
                 });
    }
  };

  return ProjectService;

}]);
