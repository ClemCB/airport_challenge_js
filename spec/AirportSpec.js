describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    weather = jasmine.createSpyObj('weather',['isWeatherStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
  });

  describe('under normal conditions',function(){

    it('is able to land planes', function() {
      airport.landPlane(plane);
      expect(airport.planes).toContain(plane);
    })

    it('is able to take off planes', function() {
      airport.landPlane(plane);
      airport.takeOff();
      expect(airport.planes).not.toContain(plane);
    })
  });

  describe('under stormy conditions',function(){

    it("dosen't allow landing", function(){
      weather.isWeatherStormy.and.returnValue(true)
      expect(function(){airport.landPlane(plane)}).toThrow('cannot land in stormy weather')
    });

  });


})
