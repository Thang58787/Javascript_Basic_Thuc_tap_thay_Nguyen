function findMax(arr) {
    let result = 0;
    let temp
    for (let i = 0; i < arr.length-1; i++) {
        temp = Math.abs(arr[i] - arr[i + 1]);
        result = Math.max(temp, result);
    }
    return result
}
console.log(findMax([1, 2, 3, 8, 9]))
console.log(findMax([1, 2, 3, 18, 9]))
console.log(findMax([13, 2, 3, 8, 9]))