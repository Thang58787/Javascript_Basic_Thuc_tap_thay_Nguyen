function checkNumber(arr) {
    if ((arr[0] % arr[2] == 0 && arr[1] % arr[2] == 0)||(arr[0] % arr[2] !== 0 && arr[1] % arr[2] !== 0)) {
        return true;
    }
    return false;
}

console.log(checkNumber([10, 25, 5]))
console.log(checkNumber([10, 20, 5]))
console.log(checkNumber([10, 20, 4]))