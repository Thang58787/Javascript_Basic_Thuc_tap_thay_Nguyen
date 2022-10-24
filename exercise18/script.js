function checkNumbers(num1, num2) {
    let sum = num1 + num2;
    if (num1 == 50 || num2 == 50) {
        return true;
    } if (sum == 50) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkNumbers(20, 20));
console.log(checkNumbers(20, 30));
console.log(checkNumbers(60, 60));


