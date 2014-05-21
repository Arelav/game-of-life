'use strict';

angular.module('gameOfLifeApp')
  .factory('world', function () {
    // Service logic
    // ...

    // Public API here
    return {
      create: function (width, height) {
        this.width = width || 24;
        this.height = height || 15;
        var world = [];
        for (var row = 0; row < this.height; row++) {
          world[row] = [];
            for (var cell = 0; cell < this.width; cell++) {
                world[row][cell] = false;
            }
        }
        return world;
      }
    };
  });
