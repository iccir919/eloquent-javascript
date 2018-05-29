let range = (start, end, skip=1) => {
    let result = [];
    if(start < end) {
        for(let i = start; i <= end; i += skip){
            result.push(i);
        }
    } else {
        if(skip === 1) skip *= -1;
        for(let i = start; i >= end; i += skip){
            result.push(i);
        }
    }
    return result;
}

let sum = (arr) => {
    return arr.reduce((accum, curr) => {
        return accum + curr;
    }, 0)
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2));
// // → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

let reverseArray = (array) => {
    let result = [];

    for(let i = array.length - 1; i >= 0; i--){
        result.push(array[i]);
    }

    return result;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let reverseArrayInPlace = (array) => {
    for(let i = 0; i < Math.floor(array.length/2); i++){
        let temp = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = temp;
    }
    return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


let arrayToList = (array) => {
    let list = null;
    for(let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        }
    }
    return list;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

let listToArray = (list) => {
    let array = [];
    while(list) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

let prepend = (element, list) => {
    if(list){
        return {
            value: element,
            rest: list
        }
    } else {
        return {
            value: element,
            rest: null
        }
    }
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

let nth = (list, idx) => {
    if(idx === 0){
        return list.value;
    } else {
        if(list.rest){
            return nth(list.rest, --idx);
        } else {
            return undefined;
        }
    }
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

let deepEqual = (a, b) => {
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

/*
//////////////// BOOK SOLUTIONS ////////////////////

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
Notes:
+ Use of ternary operator in 'skip' argument assignment

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

*/