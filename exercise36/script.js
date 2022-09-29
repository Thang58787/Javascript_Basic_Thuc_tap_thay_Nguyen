function checkLastDigit(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0)
        return false;
    const lastNum1 = num1 % 10;
    const lastNum2 = num2 % 10;
    const lastNum3 = num3 % 10;
    if (lastNum1 === lastNum2 && lastNum2 === lastNum3)
        return true;
    return false;
}

console.log(checkLastDigit(20, 30, 400));
console.log(checkLastDigit(-20, 30, 400));
console.log(checkLastDigit(20, -30, 400));
console.log(checkLastDigit(20, 30, -400));
