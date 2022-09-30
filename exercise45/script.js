function check(num1, num2) {
    if (num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2) === 15)
        return true;
    return false;
}

console.log(check(15, 9));
console.log(check(25, 15));
console.log(check(7, 8));
console.log(check(25, 10));
console.log(check(5, 9));
console.log(check(7, 9));
console.log(check(9, 25));