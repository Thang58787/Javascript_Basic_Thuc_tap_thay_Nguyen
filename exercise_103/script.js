function findMax (num){
    let result = 0;
    const num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    return num
}
console.log(findMax(12))