var ClassB = require("./b");

console.log("class b:", ClassB);

var ClassA = function() {
  this.bInstance = ClassB();
  this.property = 5;
};

var a = new ClassA();

module.exports = a;
