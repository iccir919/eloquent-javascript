function range(start, end, step) {
    var result = [];

    if(start < end){
        for(var i = start; i <= end; i += step){
            result.push(i);
        }   
    } else {
        for(var i = start; i >= end; i += step){
            result.push(i);
        }        
    }

    return result;
}

function sum(arr){
    return arr.reduce(function(curr, accum){
        return curr + accum;
    }, 0)
}

function reverseArray(arr) {
    var result = []
    for(var i = arr.length - 1; i >= 0; i++){
        result.push(arr[i]);
    }
    return result;
}

function reverseArrayInPlace(arr) {
    for(var i = 0; i < Math.floor(arr.length/2); i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

function arrayToList(arr){
    var list = {
        value: arr[0],
        rest: null
    }

    for(var i = 1; i < arr.length; i++){
        var listCopy = list;
        while(listCopy.rest){
            listCopy = listCopy.rest;
        }
        listCopy.rest = {
            value: arr[i],
            rest: null
        }
    }
    return list;
}

function listToArray(list){
    var result = [];

    while(list){
        result.push(list.value);
        list = list.rest;
    }

    return result;
}

function prepend(element, list) {
    var result = {
        value: element,
        rest: list
    }
    return result;
}

function nth(list, target, index) {
    index = index || 0;
    if(!list) return undefined;
    if(index === target){
        return list.value
    } else {
        index++;
        return nth(list.rest, target, index);
    }
}

function deepEqual(obj1, obj2) {
    function isObject(obj){
        if(typeof obj == "object" && obj != null){
            return true;
        } else {
            return false;
        }
    }

    if(isObject(obj1) && isObject(obj2)) {
        if(obj1.keys().length !== obj2.keys().length) return false
        for(var prop in obj1){
            if(obj2[prop]) {
                return deepEqual(obj1[prop], obj2[prop])
            } else {
                return false;
            }
        }
    } else {
        return obj1 === obj2;
    }
}