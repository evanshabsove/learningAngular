'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('MainCtrl', function ($scope, $location, WatchlistService) {
    // populate watchlists for dynamic nav links
    $scope.watchlists = WatchlistService.query();

    // Using the $location.path() function as a watch expression
    $scope.$watch(function(){
      return $location.path();
    }, function(path){
      if (_.includes(path, 'watchlist')) {
        $scope.activeView = 'watchlist';
      } else {
        $scope.activeView = 'dashboard'
      }
    });
  });
