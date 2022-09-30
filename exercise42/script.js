function numberOrder(num1, num2, num3) {
    if (num3 < num1)
        return "Undefinded";
    if (num2 > num1 && num3 > num2)
        return "Strict Mode";
    return "Soft Mode";
}

console.log(numberOrder(10,15,31));
console.log(numberOrder(24,22,31));
console.log(numberOrder(50,21,15));