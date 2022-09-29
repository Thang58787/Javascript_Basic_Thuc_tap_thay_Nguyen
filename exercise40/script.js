function check8(num1, num2) {
    let sum = num1 + num2;
    let difference = Math.abs(num1 - num2);
    if ((num1 === 8 || num2 === 8) || sum === 8 || difference === 8)
        return true;
    return false;
}

console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32));
console.log(check8(17, 18));