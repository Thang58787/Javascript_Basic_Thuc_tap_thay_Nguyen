function finddigits(num) {
    var result = 0;
    while (num) {
        result += num % 2 === 0;
        num = Math.floor(num / 10);
    }
    return result;
}
console.log(finddigits(123));
console.log(finddigits(1020));
console.log(finddigits(102));
