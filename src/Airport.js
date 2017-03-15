function Airport(weather = new Weather()) {
  this.planes = [];
  this.weather = weather;
}

Airport.prototype.landPlane = function(planeToLand) {
  if (this.weather.isWeatherStormy()=== true){
    console.log('stormy');
    throw 'cannot land in stormy weather';
  }
  console.log('sunny');
    this.planes.push(planeToLand);
};

Airport.prototype.takeOff = function() {
  this.planes.pop();
};
