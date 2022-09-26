function check(num1, num2) {
    if ((num1 === 50 || num2 === 50) || (num1 + num2 === 50)) {
        return true;
    } else {
        return false;
    }
}

console.log(check(50, 50));
console.log(check(20, 50));
console.log(check(20, 20));
console.log(check(20, 30));