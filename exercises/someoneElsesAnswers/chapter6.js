function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(otherVector) {
    var xSum = this.x + otherVector.x;
    var ySum = this.y + otherVector.y;
    return new Vector(xSum, ySum);
}

Vector.prototype.minus = function(otherVector) {
    var xDiff = this.x - otherVector.x;
    var yDiff = this.y - otherVector.y;
    return new Vector(xDiff, yDiff);   
}

Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return Math.sqrt((this.x * this.x)+(this.y * this.y))
    }
})

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}
  
function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.tableCellWidth = width;
    this.tableCellHeight = height;
}

StretchCell.prototype.minWidth = function() {
    return Math.max(this.inner.minWidth(), this.tableCellWidth);
}

StretchCell.prototype.minHeight = function () {
    return Math.max(this.inner.minHeight(), this.tableCellHeight);
}

StretchCell.prototype.draw = function() {
    return this.inner.draw(this.minWidth(), this.minHeight());
}


function logFive(obj) {
    var counter = 0;
    while(counter < 5 && obj.canContinue) {
        console.log(obj.next());
        counter++;
    }
}

function ArraySeq(arr) {
    this.arr = arr;
    this.counter = -1;
}

Object.defineProperty(ArraySeq.prototype, "canContinue", {
    get: function() { return this.counter < this.arr.length - 1; }
})

ArraySeq.prototype.next = function() {
    if(this.canContinue){
        this.counter++;
        return this.arr[this.counter];
    }
}

function RangeSeq(start, end) {
    var range = [];
    while(start <= end) {
        range.push(start);
        start++;
    }

    ArraySeq.call(this, range);
}

RangeSeq.prototype = Object.create(ArraySeq.prototype);

var arrSeq = new ArraySeq([1, 2]);
logFive(arrSeq)

var rangeSeq = new RangeSeq(100, 1000);
logFive(rangeSeq);