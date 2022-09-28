function check(num1, num2) {
    if (!(num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60)) {
        return "Numbers don't fit in range";
    }
    if (num1 > num2)
        return num1;
    return num2;
}

console.log(check(45, 60));
console.log(check(25, 60));
console.log(check(45, 80));