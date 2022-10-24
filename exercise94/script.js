function appearsNUmber(arr, num) {
    arr.sort();
    let result = 0
    let max = 0;
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            temp++;
        } else {
            temp = 0;
        }
        if (temp > max) {
            result = arr[i];
            max = temp;
        }
    }
    return result
}
console.log(appearsNUmber([1, 2, 3, 2, 2, 8, 1, 9]))