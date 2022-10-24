function checkSum(a, b) {
    let sum = a + b;
    if (sum >= 50 && sum <= 80) {
        return 65;
    }
    return 80;
}
console.log(checkSum(12, 50));
console.log(checkSum(96, 11));
