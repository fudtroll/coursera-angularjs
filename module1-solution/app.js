(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchController', LunchController);
  LunchController.$inject = ['$scope'];
  function LunchController($scope) {
    $scope.lunchMenu = "";
    $scope.resultText = "";
    $scope.resultClass = "";
    $scope.checkLunch = function () {
      var menuListed = $scope.lunchMenu.split(',')
      menuListed = menuListed.filter(menuListed => menuListed.trim() !=='')
      var menuLength = menuListed.length
      if (menuLength <= 0) {
        $scope.resultClass = 'red-box'
        $scope.resultText = 'Please enter data first'

      } else {
        $scope.resultClass = 'green-box'
        if (menuLength > 0 && menuLength <= 3) {
          $scope.resultText = 'Enjoy!'
        } else if (menuLength > 3) {
          $scope.resultText = 'Too much!'
        }
      }
    }
  }
})();