function minimum(a , b) {
    if(a <= b) {
        return a;
    } else {
        return b;
    }
}

function isEven(num) {
    if(num < 0) num = num * -1;
    if(num === 0){
        return true
    } else if(num === 1){
        return false
    } else {
        return isEven(num-2)
    }
}

function countBs(str){
    var bCount = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === "B")
        bCount++;
    }
    return bCount;
}

function countChars(str, char){
    var charCount = 0;
    for(var i = 0; i < str.length; i++){
        if(str.charAt(i) === char)
        charCount++;
    }
    return charCount;
}