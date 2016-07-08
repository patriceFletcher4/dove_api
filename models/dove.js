var uuid = require('uuid');
//constructor function
//How do I build this object?
function Dove(type, canFly, hasNest, color, id){
  this.type = type;
  this.canFly = canFly;
  this.hasNest = hasNest || false;
  this.color = color || 'white';
  this.id = id || uuid.v4();

}
Dove.prototype.canFly = function(newFlyValue){
  this.canFly = newFlyValue;
}


module.exports = Dove;
