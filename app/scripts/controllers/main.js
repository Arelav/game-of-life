'use strict';

angular.module('gameOfLifeApp')
  .controller('MainCtrl', function ($scope, $log, world) {
    $scope.world = world.create();
    $log.log($scope.world);
    $scope.cellToggle = function (cell, row) {
      $scope.world[row][cell] = !$scope.world[row][cell];
    };
    this.checkNeighbors = function (cell, row) {
      var neighbors = 0;
      var maxX = $scope.world[row].length - 1;
      var maxY = $scope.world.length - 1;
      for (var y = -1; y < 2; y++) {
        if (row + y < 0 || row + y > maxY) continue;
        for (var x = -1; x < 2; x++) {
          if (x === 0 && y === 0) continue;
          if (cell + x < 0 || cell + x > maxX) continue;
          if ($scope.world[cell + x][row + y]) {
            neighbors++;
          }
          $log.log('x: ' + x + ' y: ' + y);
        }
      }
      $log.log(neighbors);
      return neighbors;
    };
    this.checkNeighbors(0, 1);
  });
