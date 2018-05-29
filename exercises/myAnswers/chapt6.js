class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(otherVec) {
    let x = this.x + otherVec.x;
    let y = this.y + otherVec.y;
    return new Vec(x, y);
  }

  minus(otherVec) {
    let x = this.x - otherVec.x;
    let y = this.y - otherVec.y;
    return new Vec(x, y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    if (this.group.indexOf(value) === -1) {
      this.group.push(value);
    }
  }
  delete(value) {
    let index = this.group.indexOf(value);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }

  has(value) {
    if (this.group.indexOf(value) === -1) {
      return false;
    } else {
      return true;
    }
  }

  static from(iterableObj) {
    let group = new Group();
    for (let value of iterableObj) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.groupMembers = group.groupMembers;
  }

  next() {
    if (this.index == this.groupMembers.length) return { done: true };
    let value = this.groupMembers[this.index];
    this.index++;
    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

let map = { one: true, two: true, hasOwnProperty: true };

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
