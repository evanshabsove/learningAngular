var myApp = angular.module('Grocery',[]);

myApp.controller('GroceryCtrl', ['$scope', function($scope){

  $scope.query = {}

  $scope.grocerys = [
    {item: 'Eggs', done:false, type:'Dairy'},
    {item: 'Rice', done:false, type:'Grain'}
  ]

  $scope.getTotalGrocerys = function () {
    return $scope.grocerys.length
  }

  $scope.clearCompleted = function () {
    $scope.grocerys = _.filter($scope.grocerys, function(grocerys){
      return !grocerys.done
    })
  }

  $scope.addGrocery = function () {
    $scope.grocerys.push({item:$scope.formGroceryItem, done:false, type:$scope.formFoodGroup});
    $scope.formGroceryText = '';
    $scope.formFoodGroup = "";
  };
}]);
