function newArray (arr){
    if(arr.length>=1){
        return [arr[0],arr[arr.length-1]]
    }
    return false;
}
console.log(newArray([20, 20, 30]));
console.log(newArray([5, 2, 7, 8]));
console.log(newArray([17, 12, 34, 78]));