function checkNumbers(num1, num2) {
    if ((num1 >= 50 && num1 <= 90) && (num2 >= 50 && num2 <= 90))
        return true;
    return false;
}

console.log(checkNumbers(12, 101));
console.log(checkNumbers(52, 80));
console.log(checkNumbers(15, 99));