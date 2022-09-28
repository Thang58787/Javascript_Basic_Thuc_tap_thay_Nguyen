function checkNumber(a, b) {
    if ((a >= 40 && b >= 60) || (b >= 40 && a >= 60)) {
        return true;
    }
    if ((a >= 70 && b >= 100) || (b >= 70 && a >= 100)) {
        return true;
    }
    return false;
}
console.log(checkNumber(30, 50));
console.log(checkNumber(80, 50));
