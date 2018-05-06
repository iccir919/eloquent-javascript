function loopingATriangle() {
    var line = "#"
    while(line.length < 8) {
      console.log(line);
      line += "#";
    }
}

function fizzBuzz() {
    for(var i = 1; i < 101; i++){
        var result = "";
        if( i%3 === 0 || i%5 === 0 ){
            if( i%3 === 0 ) result += "Fizz";
            if( i%5 === 0 ) result += "Buzz";
        } else {
            result += i;
        }
        console.log(result);
    }
}

function chessBoard() {
    var result = "";
    for(var i = 0; i < 8; i++){
        var line = "";
          var j = 0;
          if(i%2 === 0 ) line += " ";
          while(line.length < 8) {
          if(j%2 === 0){
              line += "#";
          } else {
              line += " ";
          }
          j++;
        }
          line += "\n";
          result += line;
    }
    console.log(result);
}

