let min = (arg1, arg2) => {
    if(arg1 < arg2) {
        return arg1;
    } else if(arg2 < arg1){
        return arg2;
    } else {
        return undefined;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

let isEven = (num) => {
    if(num < 0){
        return isEven((num*-1))
    } else if(num === 0){
        return true;
    } else if(num === 1){
        return false;
    } else {
        return isEven((num-2))
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

let countBs = (str) => countChar(str, "B")

let countChar = (str, char) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

/*
//////////////// BOOK SOLUTIONS ////////////////////

function min(a, b) {
  if (a < b) return a;
  else return b;
}
Notes:
+ Removes unnecessarry conditional case 


function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

*/