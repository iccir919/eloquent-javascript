/*
    It would be nice if we could write comments in Egg. For example, whenever we find a 
    hash sign (#), we could treat the rest of the line as a comment and ignore it, 
    similar to // in JavaScript.

    We do not have to make any big changes to the parser to support this. We can simply 
    change skipSpace to skip comments as if they are whitespace so that all the points 
    where skipSpace is called will now also skip comments. Make this change.
*/

// load dependencies
require("../code/load.js")("code/chapter/12_language.js");
  
function skipSpace(string) {
    let matches = string.match(/(\#(.*)\r?\n|\s)*/);
    if (matches === null) return "";
    return string.slice(matches[0].length);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}