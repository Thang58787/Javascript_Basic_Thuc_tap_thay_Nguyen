function checkNumber(arr) {
    if (arr.length == 2) {
        if (!(arr[0] == 3) && !(arr[1] == 1)) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(checkNumber([7, 8]));
console.log(checkNumber([3, 2]));
console.log(checkNumber([0, 1]));
