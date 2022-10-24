function first_last_same(arr) {
    if (arr.length >= 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[0] == arr[arr.length - 1]) {
                return true
            }
        }
    }
    return false;
}
console.log(first_last_same([10, 20, 30])); 
console.log(first_last_same([10, 20, 30, 10])); 
console.log(first_last_same([20, 20, 20]));