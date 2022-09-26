function check(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0))
        return true;
    return false;
}

console.log(check(2, 2));
console.log(check(-2, 2));
console.log(check(2, -2));
console.log(check(-2, -2));