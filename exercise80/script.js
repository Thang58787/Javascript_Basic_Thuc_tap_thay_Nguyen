function swapNumber(arr) {
    if (arr.length > 1) {
        let temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        return arr;
    }
    return false;
}
console.log(swapNumber([1, 2, 3, 4]));  
console.log(swapNumber([0, 2, 1]));  
console.log(swapNumber([3])); 