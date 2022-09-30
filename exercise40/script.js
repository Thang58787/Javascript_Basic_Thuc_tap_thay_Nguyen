function checkNumber(a, b, c) {
    if (a == b && a == c && b == c) {
        return 30;
    } if (a == b || a == c || b == c) {
        return 40;
    }
    return 20;
}
console.log(checkNumber(20, 10, 20));
console.log(checkNumber(20, 20, 20));
console.log(checkNumber(20, 21, 22));


