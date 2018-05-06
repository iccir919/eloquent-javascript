function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  for(;;) {
    try {
      return primitiveMultiply(a, b);
    } catch(e) {
    	if(!(e instanceof MultiplicatorUnitFailure)) {
        	return e;
        } else {
        	return primitiveMultiply(a, b);
        }
    }
  }
}

console.log(reliableMultiply(8, 8));


var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
    var wasLocked = box.locked;
    if(box.locked) box.unlock();
    try {
        body(box._content)
    } catch (e) {
        throw new Error("Problem running faction: " + e)
    } finally {
        if(wasLocked) box.lock();
    }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true