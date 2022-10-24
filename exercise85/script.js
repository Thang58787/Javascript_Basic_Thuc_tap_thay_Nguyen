function sumOfarray(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            sum1 += arr[i];
        } if (i % 2 != 0) {
            sum2 += arr[i];
        }
    }
    return [sum1, sum2]
}
console.log(sumOfarray([1, 3, 6, 2, 5, 10]))