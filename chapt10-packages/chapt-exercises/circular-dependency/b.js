var a = require("./a");

var ClassB = function() {};

ClassB.prototype.doSomethingLater = function() {
  console.log(a.property);
};

module.exports = ClassB;
