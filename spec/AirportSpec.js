describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
  });

  it('is able to land planes', function() {
    airport.landPlane(plane);
    expect(airport.planes).toContain(plane);
  })

  it('is able to take off planes', function() {
    airport.landPlane(plane);
    airport.takeOff();
    expect(airport.planes).not.toContain(plane);
  })
})
