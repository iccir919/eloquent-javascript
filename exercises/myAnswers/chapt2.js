
let string = "#";
while(string.length <= 7){
    console.log(string);
    string += "#";
}

for(let i = 1; i <= 100; i++){
    if((i%3 === 0) || (i%5 === 0)){
        let output = "";
        if(i%3 === 0){
            output += "Fizz";
        }
        if(i%5 === 0){
            output += "Buzz";
        }
        console.log(output);
    } else {
        console.log(i);
    }

}

let size = 12;
let string = "";

for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        if(i%2 === 0){
            if(j%2 === 0){
                string += " ";
            } else {
                string += "#";
            }
        } else {
            if(j%2 === 0){
                string += "#";
            } else {
                string += " ";
            }
        }
    }
    string += "\n"
}
console.log(string);

/*
//////////////// BOOK SOLUTIONS ////////////////////

Looping A Triangle
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
Notes: 
- for loop vs while loop

FizzBuzz
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
Notes:
+ more clean and compact
+ efficient use of OR operator

Chessboard
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
Notes:
+ use of outer index reduces code repetition

*/
