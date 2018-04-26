function loopingATriangle(){
    let string = "#";
    while(string.length <= 7){
        console.log(string);
        string += "#";
    }
}

function fizzBuzz(){
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
}