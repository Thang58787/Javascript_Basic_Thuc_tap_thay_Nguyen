// Đây là bài 40, không phải 41
function checkNumber(a, b) {
    let sum = a + b;
    let diff = a - b;
    if (a == 8 || b == 8) {
        return true;
    }
    if (sum == 8 || Math.abs(diff == 8)) {
        return true;
    }
    return false;
}


console.log(checkNumber(20, 10));
console.log(checkNumber(20, 12));
console.log(checkNumber(8, 9));
console.log(checkNumber(1, 1));


