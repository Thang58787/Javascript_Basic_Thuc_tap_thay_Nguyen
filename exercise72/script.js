function checkNumber(arr) {
    if (arr.length >= 3) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[0] ==arr[arr.length - 1] ) {
                return true
            }
        }
    }
    return false;
}
console.log(checkNumber([1, 3, 5]));
console.log(checkNumber([1, 3, 5, 1]));
console.log(checkNumber([2, 4, 6]));