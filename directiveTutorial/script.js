angular.module('components', [])
  .controller('Controller', ['$scope', function($scope){
    $scope.hello = {
      text: 'hello'
    };
  }])
  .directive('helloWorld', function (){
    return {
      restrict: 'E',
      template: 'hello.html'
    };
  });

var myApp = angular.module('Directive',['components']);
