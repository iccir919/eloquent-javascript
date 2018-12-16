/*
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/

class Group {
  constructor() {
    this.group = [];
  }
  add(val) {
    if (this.group.indexOf(val) === -1) {
      this.group.push(val);
    }
  }
  delete(val) {
    this.group = this.group.filter(curr => curr !== val);
  }
  has(input) {
    for (let val of this.group) {
      if (val === input) return true;
    }
    return false;
  }

  static from(obj) {
    var group = new Group();
    for (let val of obj) {
      group.add(val);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.idx = 0;
    this.group = group;
  }

  next() {
    if (this.group.group.length === this.idx) return { done: true };

    let value = this.group.group[this.idx];

    this.idx++;
    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
