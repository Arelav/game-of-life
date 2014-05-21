'use strict';

angular.module('gameOfLifeApp')
  .controller('MainCtrl', function ($scope, $interval, world) {
    $scope.world = world.create();
    var worldHeight = $scope.world.length;
    var worldWidth = $scope.world[0].length;
    $scope.cellToggle = function (cell, row) {
      $scope.world[row][cell] = !$scope.world[row][cell];
    };

    var playing = false;
    var interval;
    var speed = 1000;
    var playGame = function () {
      interval = $interval(function() {
        nextStep();
      }, speed);
    };
    var stopGame = function() {
      $interval.cancel(interval);
    };
    $scope.playPause = function() {
      playing = !playing;
      (playing) ? playGame() : stopGame();
    };

    var checkNeighbors = function (cell, row) {
      var neighbors = 0;
      for (var y = -1; y < 2; y++) {
        if (row + y < 0 || row + y >= worldHeight) continue;
        for (var x = -1; x < 2; x++) {
          if (x === 0 && y === 0) continue;
          if (cell + x < 0 || cell + x >= worldWidth) continue;
          if ($scope.world[row + y][cell + x]) {
            neighbors++;
          }
        }
      }
      return neighbors;
    };

    var nextStep = function () {
      var world = $scope.world; //copy of world to check frozen status
      var newWorld = [];
      for (var row = 0; row < world.length; row++) {
        newWorld[row] = [];
        for (var cell = 0; cell < world[0].length; cell++) {
          var neightbors = checkNeighbors(cell, row);
          if (world[row][cell]) {//if alive
            if (neightbors < 2 || neightbors > 3) {
              newWorld[row][cell] = false; //cell dies
            } else {
              newWorld[row][cell] = true; // still alive
            }
          } else {
            if (neightbors === 3) {
              newWorld[row][cell] = true;
            } else {
              newWorld[row][cell] = false;
            }
          }
        }
      }
      $scope.world = newWorld;
    };
  });
