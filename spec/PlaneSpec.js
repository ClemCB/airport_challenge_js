describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('can receive land instruction', function() {
    expect(function() {plane.land()}).not.toThrow();
  });

  it('can receive take off instruction', function() {
    expect(function() {plane.takeOff()}).not.toThrow();
  })

})
