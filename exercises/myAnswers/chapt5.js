let arrays = [[1, 2, 3], [4, 5], [6]];
let result = arrays.reduce((accum, curr) => { 
    return accum.concat(curr)
})
console.log(result);
// → [1, 2, 3, 4, 5, 6]

function loop() {

}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1