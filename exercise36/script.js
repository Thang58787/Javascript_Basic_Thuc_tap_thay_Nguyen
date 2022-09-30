function checkLastdigit(a, b, c) {
    const arrayOfDigitA = Array.from(String(a), Number);
    const arrayOfDigitB = Array.from(String(b), Number);
    const arrayOfDigitC = Array.from(String(c), Number);
    let x = arrayOfDigitA.pop();
    let y = arrayOfDigitB.pop();
    let z = arrayOfDigitC.pop();
    if (x == y && x == z && y == z) {
        return true;
    }
    return false;

}
console.log(checkLastdigit(40, 50, 60));
console.log(checkLastdigit(40, 50, 61));
console.log(checkLastdigit(400, 50, 60));
console.log(checkLastdigit(400, 50, 61));

