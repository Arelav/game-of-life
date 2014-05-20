'use strict';

describe('Service: world', function () {

  // load the service's module
  beforeEach(module('gameOfLifeApp'));

  // instantiate service
  var world;
  beforeEach(inject(function (_world_) {
    world = _world_;
  }));

  it('should do something', function () {
    expect(!!world).toBe(true);
  });

});
