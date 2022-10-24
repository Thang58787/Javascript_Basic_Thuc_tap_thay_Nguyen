function checkNumber(a, b, c) {
    if ((a >= 20 && (a < b || a < c ))||( b >= 20 && (b < a || b < c) )||( c >= 20 && (c < a || c < b))) {
        return true;
    }
    return false;
}
console.log(checkNumber(23, 45, 10));
console.log(checkNumber(23, 23, 10));
console.log(checkNumber(21, 66, 75));
