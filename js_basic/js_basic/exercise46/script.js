function checkNumber (a, b) {
    if (a > 0 && b > 0) {
        if ((a % 7 === 0 || a % 11 === 0) && (b % 7 === 0 || b % 11 === 0)){
            return false
        }
        if (a % 7 === 0 || a % 11 === 0 || b % 7 === 0 || b % 11 === 0) {
            return true;
        }
        return false
    }
    return false
}
console.log(checkNumber(14, 21));
console.log(checkNumber(14, 20));
console.log(checkNumber(16, 20));


