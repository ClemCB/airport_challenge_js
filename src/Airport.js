function Airport() {
  this.planes = [];
}

Airport.prototype.landPlane = function(planeToLand) {
    this.planes.push(planeToLand);
};

Airport.prototype.takeOff = function() {
  this.planes.pop();
};
