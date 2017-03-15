function Airport(weather = new Weather()) {
  this.planes = [];
  this.weather = weather;
}

Airport.prototype.landPlane = function(planeToLand) {
  if (this.weather.isWeatherStormy()){
    throw 'cannot land in stormy weather';
  }
    this.planes.push(planeToLand);
};

Airport.prototype.takeOff = function() {
  if (this.weather.isWeatherStormy()){
    throw 'cannot take off when stormy';
  }
  this.planes.pop();
};
