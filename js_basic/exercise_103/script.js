function findNumbermax(num) {
    let result = 0;
    let arr = [];
    
    while (num) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (let i = 0; i < arr.length; i++) {
        var  temp = 0;
        for (let j = arr.length - 1; j >= 0; j--) {
            if (j !== i) {
                temp = temp * 10 + arr[j];
            }
        }
        result = Math.max(temp, result);
    }
    return result
}
console.log(findNumbermax(100));
console.log(findNumbermax(10));
console.log(findNumbermax(1245)); 