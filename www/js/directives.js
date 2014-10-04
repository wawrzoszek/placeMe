var app = angular.module('directives',[]);

app.directive('pwCard', function(){  return {
     restrict: 'E',
     scope: {
      username: '@',
      commentsnumber: '@',
      picture: '@',
      email: '@',
      content: '@'
    },
	templateUrl: 'templates/pw-card.html' }; 
});