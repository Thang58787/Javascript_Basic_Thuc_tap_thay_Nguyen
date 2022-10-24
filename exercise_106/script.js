function divide_digit(num, d) {
    if (num % d !== 0||d==1) {
        return num;
    }
    while (num % d === 0) {
        num /= d;
    }
    return num
}
console.log(divide_digit(-12, 2))
console.log(divide_digit(13, 2))
console.log(divide_digit(13, 1))