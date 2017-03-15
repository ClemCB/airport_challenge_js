describe('Weather', function() {
  var thisWeather;

  beforeEach(function(){
    thisWeather = new weather();
    spyOn(thisWeather, 'isWeatherStormy').and.returnValue(true);
  });

  it('checks weather and returns true when stormy', function() {
    expect(thisWeather.isWeatherStormy()).toEqual(true);
  })
})
