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
*/