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

function chessBoard(){
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
    return string;
}