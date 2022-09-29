function check(num1, num2, num3) {
    if (num1 === num2 && num1 === num3)
        return 30;
    if (num1 === num2 || num1 === num3 || num2 === num3)
        return 40;
    return 20;
}

console.log(check(8, 8, 8));
console.log(check(8, 8, 18));
console.log(check(8, 7, 18));