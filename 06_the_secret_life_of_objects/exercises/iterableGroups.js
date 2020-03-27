/*
    Make the Group class from the previous exercise iterable. Refer to the 
    section about the iterator interface earlier in the chapter if you 
    aren’t clear on the exact form of the interface anymore.

    If you used an array to represent the group’s members, don’t just 
    return the iterator created by calling the Symbol.iterator method on 
    the array. That would work, but it defeats the purpose of this exercise.

    It is okay if your iterator behaves strangely when the group is modified 
    during iteration.
*/

class Group {
    constructor() {
        this.group = [];
    }

    add(val) {
        if (this.group.indexOf(val) === -1) this.group.push(val);
    }

    delete(val) {
        this.group = this.group.filter((el) => el !== val);
    }

    has(val) {
        return this.group.indexOf(val) !== -1;
    }

    static from(iterable) {
        let group = new Group();
        for(let val of iterable) {
            group.add(val);
        }
        return group;
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.idx = 0;
    }

    next() {
        if (this.idx === this.group.length) return {done: true};

        let value = {
            idx: this.idx,
            value: this.group[this.idx]
        }
        this.idx++;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return this.group[Symbol.iterator]();
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c