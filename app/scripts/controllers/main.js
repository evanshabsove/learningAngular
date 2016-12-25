'use strict';

/**
 * @ngdoc function
 * @name learningAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningAngularApp
 */
angular.module('learningAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
