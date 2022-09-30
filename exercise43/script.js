function sameLastDigit(num1, num2, num3) {
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;
    if (lastDigit1 === lastDigit2 ||
        lastDigit1 === lastDigit2 ||
        lastDigit2 === lastDigit3)
        return true;
    return false;
}

console.log(sameLastDigit(22, 32, 42));
console.log(sameLastDigit(102, 302, 2));
console.log(sameLastDigit(20, 22, 45));