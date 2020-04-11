/*
    The way we have defined fun allows functions in Egg to reference the surrounding 
    scope, allowing the function’s body to use local values that were visible at the 
    time the function was defined, just like JavaScript functions do.

    The following program illustrates this: function f returns a function that adds 
    its argument to f’s argument, meaning that it needs access to the local scope 
    inside f to be able to use binding a.
*/

// load dependencies
require("../code/load.js")("code/chapter/12_language.js");

run(`
do(define(f, fun(a, fun(b, +(a, b)))),
   print(f(4)(5)))
`);
// → 9

/*
    Go back to the definition of the fun form and explain which mechanism causes 
    this to work.

    The functions have access to the surrounding scope because when a function 
    is created, it a scope that is created with local values that were
    visible at the time the function was defined. 
    
    let localScope = Object.create(scope);
        ....
    return evaluate(body, localScope);

    The scope is value is something that is discretely passed by the language. 
    A function defined at the top level will receive the topLevel scope,
    variables that are added within that function are added to that function's
    scope level, and then so on and so on for any functions defined within that
    function within another function.
*/