function findNumber(arr, num) {
    arr.sort();
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            for (let j = 0; j < i; j++) {
                if (arr[j] % 2 == 0) {
                    result++
                }
            }
        }
    }
    return result;
}
console.log(findNumber([1,2,3,4,5,6,7,8], 5))
console.log(findNumber([1,3,5,6,7,8], 6))