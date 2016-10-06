app.directive('projectCard', function() {

  return {
    restrict: 'E',
    templateUrl: 'js/directives/project_card.html',
    scope: {
      project: '='
    }
  };

});
