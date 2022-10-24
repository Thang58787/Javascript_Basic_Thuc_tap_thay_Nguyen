function replaceNumber(arr, old_number, new_number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == old_number) {
            arr[i] = new_number
        }
    }
    return arr;
}
console.log(replaceNumber([1, 3, 4, 2, 4],2,6))