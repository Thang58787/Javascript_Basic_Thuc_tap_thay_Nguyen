function checkNumber(a, b) {
    if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
        return true;
    }
    return false;
}
console.log(checkNumber(55, 60));
console.log(checkNumber(5, 60));
console.log(checkNumber(5, 6));


