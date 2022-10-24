function largestNumber(a, b, c) {
    let num = 0;
    if (a >= b && a >= c) {
        return num = a;
    } if (b >= a && b >= c) {
        return num = b;
    } else {
        return num = c;
    }
}
console.log(largestNumber(7, 4, 5))