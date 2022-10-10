function checkNumber(arr) {
    if (arr.length == 0 || arr.length == 1 || arr.length == 2) {
        return ((arr[0] === 30 && arr[1] === 30) || (arr[0] === 40 && arr[1] === 40))
    }
    

}
console.log(checkNumber([30, 30]));
console.log(checkNumber([40, 40]));
console.log(checkNumber([20, 20]));
console.log(checkNumber([30]));