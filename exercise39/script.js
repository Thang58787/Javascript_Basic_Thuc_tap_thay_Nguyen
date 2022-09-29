function checkSum(num1, num2) {
    let sum = num1 + num2;
    if (sum >= 50 && sum <= 80)
        return 65;
    return 80;
}

console.log(checkSum(30, 20));
console.log(checkSum(90, 80));